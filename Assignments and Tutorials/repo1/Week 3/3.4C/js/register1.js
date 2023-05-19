var username=""
var password="";
var repassword="";
var osVar="";
var modelVar ="";
var allModels=
    [
        {model:'HTC 10', os:'Android'},
        {model:'Nokia 6', os:'Android'},
        {model:'Samsung Galaxy 20 Ultra', os:'Android'},
        {model:'IDD VIOS Non Windows', os:'Android'},
        {model:'iPhone X', os:'IOS'},
        {model:'iPhone Xs Max', os:'IOS'},
        {model:'iPhone 11 Pro Max', os:'IOS'},
        {model:'IDD Windows Non Android', os:'IOS'},
        {model:'HP Elite x3', os:'Windows'},
        {model:'Microsoft 950', os:'Windows'},
        {model:'Microsoft 950XL', os:'Windows'},
        {model:'IDD VIOS Non Android', os:'Windows'}
    ];
new Vue ({
    el: '#app' ,
    data: {
        username, password, repassword, osVar, modelVar, allModels
    },
    computed:{
        filteredModel: function(){
            return this.allModels.filter((m)=>{
                return m.os.toLowerCase().match(this.osVar.toLowerCase());
            });
        }
    }
});