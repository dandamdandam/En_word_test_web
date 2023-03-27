var load=null;
var write=null;
var del=null;
var check_data=null; //DEBUG

$(document).ready(function(){
    load=function(){
        $.get('/load', function(data){
            $("#add_here").empty();
            
            $(data).each(function(i){
                var id=this._id;

                $("#add_here").append("<tr class='"+id+"'> <td>"+this.word+"</td> <td>"+this.meanings+"</td> </tr>");

                $("#add_here tr:last-child").append("<td><button class='delete_data_bu'>삭제</button></td>");

                $("#add_here tr:last-child .delete_data_bu").click(function(evt){
                    del(id)
                });
            });
        });
    };

    write=function(word, meanings){
        var postdata={
            'word': word,
            'meanings': meanings
        };
        $.post('/write', postdata, function(){
            load();
        });
    };

    del=function(id){
        var postdata={
            '_id':id
        };
        $.post('/del', postdata, function(){
            load();
        });
    };
    check_data=function(word){
        var postdata={
            'name':word
        }
        $.post('/check_data', postdata);
    }

    $("#words_input button").click(function(evt){
        contents=$("#words_input textarea").val().split(/r?\n/);
        wrong_form="";
        for (var i=0; i<contents.length; i++) {
            content=contents[i].split('&&');
            if(content.length!=2){
                wrong_form+=contents[i]+'\n';
            }
            else{
                write(content[0], content[1].split(","));
            }
        }
        $("#words_input textarea").val("");
        if(wrong_form.length!=0){
            alert(wrong_form+'은 잘못된 형식의 입력입니다.');
        }
    });

    $("#re_load").click(function(evt){
        load();
    });
});