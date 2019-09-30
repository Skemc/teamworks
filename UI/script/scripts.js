const menu_icon = document.querySelector('.menu');
const side_menu = document.querySelector('.side-menu');
const fetch = () => {
  const get = document.querySelector('#get').value;
  document.querySelector('#put').value = get;
}
menu_icon.addEventListener('click', (e) => {
side_menu.style.display = 'block';
});




    ClassicEditor
    .create( document.querySelector( '#body' ), {
        toolbar: [ 
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'blockQuote' ],

        heading: {
            options: [
                { 
                  model: 'paragraph', 
                  title: 'Paragraph', 
                  class: 'ck-heading_paragraph' 
                },
               
                { 
                  model: 'heading1', 
                  view: 'h1', 
                  title: 'Heading 1', 
                  class: 'ck-heading_heading1' 
                },
                
                { 
                  model: 'heading2', 
                  view: 'h2', 
                  title: 'Heading 2', 
                  class: 'ck-heading_heading2' 
                }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );

  
 



    
    
});



  
      