$(function(){
    var i=0;
    $("#edit").on("click",function(){
        i++;
        if(i%2==1)
            $("#box span i").hide();
        else
            $("#box span i").show();
    })
    $("#add").on("click",function(){
        $(this).hide();
        $("#txt").remove();
        $("<input type='text' id='txt'>").appendTo($("#box"));
        $("#txt").focus();
        $("#txt").on("blur",function(){
            var vala= $("#txt").val();
            if(vala===""){
                alert("亲！输入文字好吗？");
            }else{
                $("#add").show();
                $("#txt").hide();
                $("<span>"+vala+"<i class='fa fa-close'></i></span>").insertBefore($("#add"));
                $("#box span>i").show();
            }
        })
    })
    $("#box").on("click","span>i",function(){
        $(this).parent().remove();
    })
})