$(document).ready(function(){
    
    /////////////////////////////
     // Home search filter
     // Toggle filter select list
     var $searchFilterList = $('#filter-search-nav');
     var $isFilterOpen = false;

     $('div.filter-search').click(function(e) {
         e.preventDefault();

         if (!$isFilterOpen) {

             //Change button filter state to selected
             
             $(this).find('span').removeClass('filter-default');
             $(this).find('span').addClass('filter-active');

             //Reveal filter select list
             $searchFilterList.css('display','block');

             $isFilterOpen = true;

         } else {
             //Change button filter state to default
             
             $(this).find('span').removeClass('filter-active');
             $(this).find('span').addClass('filter-default');

             //Hide filter select list
             $searchFilterList.css('display','none');

             $isFilterOpen = false;

         }
    });

     //
     //
     // Collect users' selection
     //
     // 
        var $selectedFilter = "Library Catalog";

       $('#filter-search-nav li').each(function(index){
           $(this).click(function(ev){
              
              ev.preventDefault();

              //console.log($(this).text());
              //Selected filter feedback
              $('.search-filter-selected').text($(this).text()).fadeIn('slow');
              $('input[name="classgroup"]').val('');

              $('.filter-search .active').text($(this).text());

              $selectedFilter = $(this).text();

               //Hide filter select list
               $searchFilterList.css('display','none');

               console.log($searchFilterList);

               //Change button filter state to default
               //$('a.filter-search').css('background','url(../../themes/vivo-cornell/images/filteredSearch.gif) no-repeat right top');
               $('a.filter-search').removeClass('filter-active');
               $('a.filter-search').addClass('filter-default');

               
               $isFilterOpen = false;


           });

       });

       //When focus, hide filter select list and change filter button state to default
       $('input.search-homepage').focus(function(){

           $('input.search-homepage').attr("value","");
           $('input.search-homepage').css({
               'text-align' : 'left',
               'opacity' : 1
           });

           if (!$isFilterOpen) {

               $isFilterOpen = false;

           }else {

                //Hide filter select list
                    $('#filter-search-nav').hide();

                    //Change button filter state to default
                    //$('a.filter-search').css('background','url(../../themes/vivo-cornell/images/filteredSearch.gif) no-repeat right top');
                    $('div.filter-search').find('span').removeClass('filter-active');
                    $('div.filter-search').find('span').addClass('filter-default');

                    $isFilterOpen = false;

             }

       });

       


       $( '#search' ).submit(function(ev) {
          
          var send = $('.search-homepage').val() + '    ' + $selectedFilter;
          console.log(send);

          switch ($selectedFilter) {

                case 'Library Catalog':
                    $(this).attr("action", 'https://search.library.cornell.edu');
                    break;

                case 'WorldCat':
                    $(this).attr("action", 'http://cornell.worldcat.org/search?qt=wc_org_cornell');
                    break;

                case 'Activities':

                    $(this).attr("method", 'get');
                    $('#edit_keys').name = "keys";
                    $(this).attr("action", '/search/node/');
                    break;
            }



          //$(this).attr("action", 'https://search.library.cornell.edu');

        });


       /*


          $("#selectsearch").change(function() {
            var action = $(this).val() == "people" ? "user" : "content";
            $("#search-form").attr("action", "/search/" + action);
          });

          */

	});




/*function chgAction() {

            var form = document.form1;
            
            //console.log('chgAction()');
            //console.log(form.search_type.selectedIndex);
            
            switch (form.search_type.selectedIndex) {
                case 0:
                    form.action = "https://search.library.cornell.edu";
                    break;
                case 1:
                    form.action = "http://cornell.worldcat.org/search?qt=wc_org_cornell";
                    break;
                case 2:
                    form.method = "get";
                    form.action = "/search/node/";
                    form.edit_keys.name = "keys";
                    break;
            }
        }
*/