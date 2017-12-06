function $(key){
    return document.getElementById(key);
}

window.onload=function(){

    var i=1;
    var customerService=new CustomerService();

    $("add-btn").onclick=function(){
        $("customer-dialog").style.display="block";
    };

    $("save-btn").onclick=function(){
        var customer=new Customer();
        customer.id=i;
        customer.firstName=$("first-name").value;
        customer.lastName=$("last-name").value;
        customer.email=$("email").value;
        customer.status=$("status").checked;
        customerService.insert(customer);
        i++;
        $("customer-dialog").style.display="none";
        
    }

    $("show-btn").onclick=function(){
        var content="<ul>";
        for(var i=0;i<=customerService.count();i++){
            var customer=customerService.getByIndex(i);
            content +="<li>" + customer.fullName() + "</li>";
        }
        content +="</ul>";
        $("customer-data").innerHTML=content;
    };

    $("cancel-btn").onclick=function(){
        $("customer-dialog").style.display="none";
    };




}