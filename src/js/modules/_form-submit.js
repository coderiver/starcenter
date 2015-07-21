module.exports = function(formToSubmit) {
    var form    = $(formToSubmit);
    var subject = form.data('subject');
    var url     = 'actions/send.php';

    function valid() {
        input = form.find('input');
        for (var i = 0; i < input.length; i++) {
            if ( input[i].value === '' ) return false;
        }
        return true;
    }

    form.on('submit', function(e) {
        e.preventDefault();

        if ( valid() ) {
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize() + '&subject=' + subject, // serializes the form's elements.
                success: function() {
                    form.addClass('is-success');
                    setTimeout(function() {
                        form.find('input, textarea').val('');
                    }, 1000);
                    setTimeout(function() {
                        form.removeClass('is-success');
                    }, 5000);
                }
            });
        }

    });

};
