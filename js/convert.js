function file_name( ){
        const preview = document.getElementById('pdfRender')
        const name = $('#file_input')[0].files[0].name
        const splitname = name.split('.')
        splitname.pop()
          var formData = new FormData();
        formData.append('File', $('#file_input')[0].files[0], name);
        formData.append('StoreFile', 'true');
        formData.append('FileName', splitname.join('.'));
        document.getElementById('convertBtn').innerHTML = 'Loading...'


    $.ajax({
        url: 'https://v2.convertapi.com/convert/' + name.split('.').pop() + '/to/pdf?Secret=oN1zA4SHtaQWh5E0',
        data: formData,
        processData: false,
        contentType: false,
        method: 'POST',
        success: function(data) {
            console.log(data.Files[0].Url);
            preview.src = data.Files[0].Url;
             document.getElementById('convertBtn').innerHTML = 'Success'

        },
        failure: function(){
            window.alert('ERROR CONVERTING FILE!!!');

        }
    })
}