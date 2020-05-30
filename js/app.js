$(document).ready(function(){

    
        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            adaptiveHeight: true
          });

          $('.auto-slider-carousel').flickity({
            autoPlay: true,
            contain: true,
            wrapAround: true,
            pauseAutoPlayOnHover: false
          })

          $('.view').click(function(){
            // opening the modal
            $('.product-modal').addClass('show');

            // adding image to opened modal
            let src = $(this).parent().parent().find('img').attr('src')

            $('#modal-img').attr('src', src);

            // adding price and product text to modal
            let product = $(this).parent().parent().find('.d-none').text()

            let price = $(this).parent().parent().find('.price-badge > span').text()

            $('.product > span').text(product);

            $('.price > span').text(price)

               // closing modal when someone clicks outside of it 
             $('.product-modal').click(function(e){

            let id = e.target.id

            if(id ==="modal"){
              $('.product-modal').removeClass('show');
            }           
          })
          })

          // closing modal

          $('.modal-close > i').click(function(){
            $('.product-modal').removeClass('show');
            
          })

          // alert when add to cart is clicked

          $('.bottom-badge div:first-child').click(function(){
            alert("Added to cart")
          })
         
        

          // copyright
          let date = new Date();

          document.getElementById('year').innerHTML = date.getFullYear();
})
