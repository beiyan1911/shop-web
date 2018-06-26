import Utils from './utils'
export default{
	post(opts){
		let _url = opts.url;
		let _body = opts.data || {};
		let _type = opts.type || 'POST';
		let defer = $.Deferred();
		Utils.createMask();
		$.ajax({
			url:_url,
			data:_body,
			type:_type,
			headers:{
				"token":Utils.getLocalStorage('token')
			},
			// contentType:'application/json;charset=UTF-8',
			success:function(data){
				console.log(data)
				if(data.success == 400){
					console.log("login");
					window.location.href="/login";
				}
				if(data.success == 0){
					defer.reject(data);
				}
				if(data.success != 0 && data.success != 400){
					defer.resolve(data);
				}
				Utils.deleteMask();
			},
			error:function(data){
				Utils.deleteMask();
				console.log(data)
			}
		})
		return defer.promise();
	},
	postNoLoading(opts){
		let _url = opts.url;
		let _body = opts.data || {};
		let _type = opts.type || 'POST';
		let defer = $.Deferred();
		$.ajax({
			url:_url,
			data:_body,
			type:_type,
			headers:{
				"token":Utils.getLocalStorage('token')
			},
			success:function(data){
				console.log(data)
				if(data.success == 400){
					console.log("login");
					window.location.href="/login";
				}
				if(data.success == 0){
					defer.reject(data);
				}
				if(data.success != 0 && data.success != 400){
					defer.resolve(data);
				}
			},
			error:function(data){
				console.log(data)
			}
		})
		return defer.promise();
	},
	noUser(opts){
		let _url = opts.url;
		let _body = opts.data || {};
		let _type = opts.type || 'POST';
		let defer = $.Deferred();
		Utils.createMask();
		$.ajax({
			url:_url,
			data:_body,
			type:_type,
			success:function(data){
				// let d = JSON.parse(data);
				let d = data;
				console.log(d);
				if(d.success == 1){
					let res = d.data;
					Utils.setLocalStorage('workerName',res.username);
					Utils.setLocalStorage('token',res.token);
					Utils.setLocalStorage('workerId',res.workerId);
					defer.resolve(d);
				}
				if(d.success == 0){
					defer.reject(d);
				}
				Utils.deleteMask();
			},
			error:function(data){
				Utils.deleteMask();
			}
		})
		return defer.promise();
	}
}
