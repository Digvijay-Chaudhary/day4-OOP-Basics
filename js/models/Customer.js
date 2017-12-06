function Customer(){
    return {
        id:0,
        firstName:'',
        lastName:'',
        email:'',
        status:false,
        fullName:function(){
            return this.firstName + ' ' + this.lastName;
        }
    };
}