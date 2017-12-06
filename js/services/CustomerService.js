function CustomerService(){
    return{
        customers:[],
        insert:function(customer){
            this.customers.push(customer);
        },
        getAll:function(){
            return this.customers;
        },
        count:function(){
            return this.customers.length;
        },
        getByIndex:function(index){
            return this.customers[index];
        }
    };
}