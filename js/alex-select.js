

// alex-select
$(document).ready(function(){
    //调用插件
    $.ddl(".alex-select");

    // $("select").change(function(){
    // 	alert($(this).val());
    // });
});

//模拟下拉列表控件
(function($){
    $.ddl = function(selector){
        if(!selector){return false;}
        var $ddls = $(selector);
        if(!$ddls.length){return false;}

        $ddls.each(function(){
            $(this).wrap('<div class="ddl-wrap"></div>');
            var $wrap = $(this).parent();
            var arr = [];
            var $options = $(this).find("option");
            $options.each(function(){
                arr.push('<a href="javascript:;" data-val="'+ $(this).val() +'">'+ $(this).html() +'</a>');
            });
            $wrap.append('<dl class="ddl"><dt>'+ $(this).find("option:selected").html() +'</dt><dd>'+ arr.join('') +'</dd></dl>');
            $(this).hide();
        });

        $(document).on("mouseleave", "dl.ddl dt", function(){
            $(this).parent().find("dd").hide();
            $(this).removeClass("on");
        });

        $(document).on("click", "dl.ddl dt", function(){
            var $that = $(this);
            var $dd = $(this).parent().find("dd");
            var pos = $that.position();
            $that.toggleClass("on");
            $dd.toggle().css({left: pos.left + "px", top: pos.top + $that.outerHeight() - 1 + "px", width: $that.outerWidth() - 2 + "px"});

            $dd.mouseenter(function(){
                $(this).show();
                $that.addClass("on");
            }).mouseleave(function(){
                $(this).hide();
                $that.removeClass("on");
            });
        });

        $(document).on("click", "dl.ddl a", function(){
            var $wrap = $(this).parent().parent();
            var $dt = $wrap.find("dt");
            var $dd = $wrap.find("dd");
            var $items = $dd.find("a");
            var i = $items.index($(this));

            $dt.html($(this).html());
            $dd.hide();

            var $select = $wrap.parent().find("select");
            $select.find("option").eq(i).prop("selected", true);
            $select.trigger("change");
        });

        return this;
    };
})(jQuery);