/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

d3.csv("data/gates_money.csv", function(data) {
        custom_bubble_chart.init(data);
        custom_bubble_chart.toggle_view('all');
    });
 
    $(document).ready(function() {
      $('#view_selection a').click(function() {
        var view_type = $(this).attr('id');
        $('#view_selection a').removeClass('active');
        $(this).toggleClass('active');
        custom_bubble_chart.toggle_view(view_type);
        return false;
      });
    });


