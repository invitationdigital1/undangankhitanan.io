(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NPGJWXK');


window.onload = function() {
var context = new AudioContext();
}



function pushPurchase(location) {
    var paket = $('select[name="total"] option:selected').text();
    var kupon = $('input[name="kupon"]').val();
    var uniqId = Math.random();
    var split = paket.split('.');
    // console.log('paket: '+paket + '- kupon: '+kupon + '- uniq: '+uniqId + '- harga: '+split[1]);
    window.dataLayer.push({
        'event': 'purchase',
         ecommerce: {
            transaction_id: "T_12345_1_".uniqId,
            currencyCode: "IDR",
            currency: "IDR",
           affiliation: "Indoinvite",
           value: split[1],
           tax: 0,
           shipping: 0,
           coupon: kupon,
                items: [
                    {
                        item_name: paket,
                        item_id: "Paket",
                        price: split[1],
                        item_brand: "Indoinvite",
                        item_category: location,
                        item_list_name: "Aktivasi",
                        index: 1
                    },
                ]
             }
    });
}



    localStorage.setItem('paket', 0);





    // var d = new Date(new Date().getTime() + 10*86400000);
    // var da = new Date(new Date().getTime());
    // var d = new Date("2021-10-5");
        AOS.init({
        duration: 3000,
    });
        if ($('.slide-story').length) {
        let splideStory = new Splide('.slide-story', {
            type      : 'fade',
            rewind    : true,
            autoplay: false,
            interval   : 5000,
            speed: 3000,
            rewindSpeed: 2000,
            pagination: true,
            cover: true,
            updateOnMove: true,
            arrows     : true,
            lazyLoad: 'nearby',
        }).mount();
    }
    $(document).ready(function() {
        runLazy();

    });

    function runLazy() {
        const lazyBackgrounds = $('.lazy-background');
        const lazyImages = $('.lazy-img');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = $(entry.target);

                    // Lazy-load untuk background image
                    if (target.hasClass('lazy-background')) {
                        const bgImage = target.data('bg');
                        target.css('background-image', 'url(' + bgImage + ')');
                        target.removeClass('lazy-background');
                    }

                    // Lazy-load untuk img dengan kelas lazy-img
                    if (target.hasClass('lazy-img')) {
                        const imgSrc = target.data('src');
                        target.attr('src', imgSrc);
                        target.removeClass('lazy-img');
                    }

                    observer.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.each(function() {
            observer.observe(this);
        });

        lazyImages.each(function() {
            observer.observe(this);
        });
    }

    
            $('p').each(function(id) {
            $(this).addClass('fun-p-' + id);
        });
            $('div').each(function(id) {
            $(this).addClass('fun-div-' + id);
        });
            $('h1').each(function(id) {
            $(this).addClass('fun-h1-' + id);
        });
            $('h2').each(function(id) {
            $(this).addClass('fun-h2-' + id);
        });
            $('h3').each(function(id) {
            $(this).addClass('fun-h3-' + id);
        });
            $('h4').each(function(id) {
            $(this).addClass('fun-h4-' + id);
        });
            $('h5').each(function(id) {
            $(this).addClass('fun-h5-' + id);
        });
            $('h6').each(function(id) {
            $(this).addClass('fun-h6-' + id);
        });
            $('span').each(function(id) {
            $(this).addClass('fun-span-' + id);
        });
            $('li').each(function(id) {
            $(this).addClass('fun-li-' + id);
        });
            $('ul').each(function(id) {
            $(this).addClass('fun-ul-' + id);
        });
            $('ol').each(function(id) {
            $(this).addClass('fun-ol-' + id);
        });
            $('a').each(function(id) {
            $(this).addClass('fun-a-' + id);
        });
            $('img').each(function(id) {
            $(this).addClass('fun-img-' + id);
        });
            $('small').each(function(id) {
            $(this).addClass('fun-small-' + id);
        });
    

    

    // openShop();

    // AUTO SCROLL
// var output = $('h1');
var isPaused = false;
var time = 0;
// var t = window.setInterval(function() {
//     if(!isPaused) {
//         time++;
//         window.scrollBy(0,0.5);
//     }
// }, 10);
var scroll = 25;
var urlParams = new URLSearchParams(window.location.search);
var scrollValue = urlParams.get('scroll');
if (scrollValue) {
    scroll = scrollValue;
}

var cekVia = localStorage.getItem('via');
    if (cekVia) {
        var element = $('input[name="kupon"]');
        element.val(cekVia);
    }

function runAutoScroll() {
    var t = window.setInterval(function() {
        if(!isPaused) {
            time++;
            window.scrollBy(0,1);
        }
    }, scroll);
}



//with jquery
$('#auto_scroll').on('click', function(e) {
    e.preventDefault();
    if (isPaused) {
        $('#menu_auto_scroll').css('background-color', '#4970ea');
        isPaused = false;
        $('.notif_scroll').show();
    } else {
        isPaused = true;
        $('#menu_auto_scroll').css('background-color', 'transparent');
        $('.notif_scroll').hide();
    }

});

// END AUTO SCROLL


        // modal
    function openEditModal(modalId) {
        $('#'+modalId).show();
        anime({
            targets: '#'+modalId+'-page1',
            translateY: 0,
            opacity: 1,
            duration: 250,
            easing: 'easeInOutSine'
        });
        console.log('open modal');

        window.dataLayer.push({
            'event': 'edit_list_view'
        });
    }

    
    function closeEditModal(modalId) {
        $('.onedit-class').removeClass('onedit-class');
        anime({
            targets: '#'+modalId+'-page1',
            translateY: 400,
            opacity: 0,
            duration: 250,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            $('#'+modalId).hide();
            toEdit1(modalId)
        }, 250);
    }

    function registrasiRe() {
            // Serialize form data
            var formData = new FormData($("#login-form")[0]);
            var formUrl = $("#login-form").attr('action');

            // var formData = $("#"+modalId+"-form").serialize();
            var textBtn = $('.btn-login-re').text();
            $('.btn-login-re').text('Loading...');

            console.log(formData);
            $('button, input, textarea').prop('disabled', true);
            // Make AJAX POST request
            $.ajax({
                type: "POST",
                url: formUrl,
                data: formData,
                processData: false,  // Prevent jQuery from automatically processing the data
                contentType: false,
                success: function(response){
                    var jsonResponse = JSON.parse(response);
                    var status = jsonResponse['status'];
                    var msg = jsonResponse['msg'];

                    if (status == 1) {
                        closeEditModal('login');
                        openEditModal('data-pernikahan');
                        $('#notif-login-re').text('')
                    } else {
                        $('#notif-login-re').text(msg)
                    }
                    $('button, input, textarea').prop('disabled', false);
                    $('.btn-login-re').text('Masuk Dan Edit');
                },
                error: function(errjqXHR, textStatus, errorThrownor){
                    console.log("Error:", errjqXHR);
                    $('#notif-login-re').text('Terjadi kesalahan, periksa koneksi internet dan coba lagi')
                    $('button, input, textarea').prop('disabled', false);
                    $('.btn-login-re').text('Masuk Dan Edit');
                    // showError()
                    // Handle the error
                }
            });
    }

    


    var d = new Date("Fri Oct 22 2021 10:31:00");
    // console.log(d.toDateString());
    // var d = new Date(2021, 10, 5, 12, 0, 0, 0);

    let searchParams2 = new URLSearchParams(window.location.search)
    let demoParam = searchParams2.get('demo')
    let contohParam = searchParams2.get('contoh')

    if (demoParam == 1) {
           // tema slide
      const awal1 = $('.awal1')
      awal1.remove();
      const pages1 = $('.pages1');
      if (pages1) {
        const body = pages1.closest('body');
        body.attr('style', 'max-width:440px; margin: 0 auto; width: 100%');
        pages1.append(`
        <div class="navigasi-realtime" style="position: absolute; z-index:99;bottom:7rem;left:2rem;">
            <div style="display:flex; width:100%;">
               <button type="button" onclick="prev()"> <svg class=" w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:50px; height:50px; background-color: #fff;border-radius: 1.25rem;opacity: 0.9;fill: #2d3748;" >
                    <path fill-rule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clip-rule="evenodd"/>
                </svg>
                </button>
                <button type="button" onclick="next()">
                    <svg class=" w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:50px; height:50px; background-color: #fff;border-radius: 1.25rem;opacity: 0.9;fill: #2d3748; margin-left: 7px;">
                    <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
                </svg>
                    </button>
            </div>

            </div>`
        )
      }
        // tema biasa
      $('.awal').hide();
      $("#playAudio").prop("muted",true);
        $("#playAudioS").prop("muted",true);
    }

    $('#wa3').hide();


    $('#ucapan_2').bind('input propertychange', function() {
        $('#wa2').show();
    });

    $("#hadir_id").change(function() {
        var val = $(this).val();
        if(val == "1") {
            $('#wa3').show();
            $('.custom-form').show();
            $('.custom-form').find('input, textarea, select').prop('disabled', false);
            $('#jumlah_datang_id').val('1');
        }
        else {
            $('#wa3').hide();
            $('.custom-form').hide();
            $('.custom-form').find('input, textarea, select').prop('disabled', true);
            $('#jumlah_datang_id').val('0');
        }
  });

    $(".status_radio").change(function() {
        var val = $(this).val();
        if(val == "1") {
            $('#wa3').show();
            $('#jumlah_datang_id').val('1');
        } else {
            $('#wa3').hide();
            $('#jumlah_datang_id').val('0');
        }
    });

  $("#hadir_id_popup").change(function() {
        var val = $(this).val();
        if(val == "1") {
            $('#wa3_popup').show();
            $('#formContainer2').show();
            $('#formContainer2').find('input, textarea, select').prop('disabled', false);
            $('#jumlah_datang_id_popup').val('1');
        }
        else {
            $('#wa3_popup').hide();
            $('#jumlah_datang_id_popup').val('0');
            $('#formContainer2').hide();
            $('#formContainer2').find('input, textarea, select').prop('disabled', true);
        }
  });

    $("#konfirmasi-hadiah").submit(function (e) {
        e.preventDefault();
        let nama = $('#nama').val();
        let jumlah = $('#jumlah').val();
        let norek = $('input[name=norek]:checked').val();
        let rekening = norek.split('|');
        let phoneNumber = '089506775502';
        phoneNumber = phoneNumber.replace(/^0/, '62');

        if (nama && jumlah && norek) {
            let message = 'Halo, saya ' + nama + ' ingin konfirmasi pemberian hadiah sejumlah Rp. ' + jumlah + ' melalui nomor Rekening' + rekening[1] + ' atas nama '+ rekening[0] +'. Bisa di check yaa.';
            let url = `https://wa.me/${phoneNumber}?text=` + encodeURIComponent(message);
            window.open(url, '_blank');
        }
    });

    let jamStart1 = $('#jam_start1').val();
    let jamEnd1 = $('#jam_end1').val();
    $('#sampai_selesai_check').click(function () {
        if (jamStart1 == null || jamEnd1 == null) {
            $('#jam_start1').val('08:00');
            $('#jam_end1').val('08:00');
        }

    })

    let jamStart2 = $('#jamStart2').val();
    let jamEnd2 = $('#jam_end2').val();

    $('#sampai_selesai_check2').click(function () {
        console.log(jamEnd2);
        if (jamStart2 == null || jamEnd2 == null) {
            $('#jamStart2').val('08:00');
            $('#jam_end2').val('08:00');
        }
    });

          //         //     lightGallery(document.getElementById('lightgallery'), {
        //         speed: 500,
        //         plugins: [lgZoom, lgThumbnail],
        //     });
        // 
        $("#galleryGrid")
                    .justifiedGallery({
                captions: false,
                rowHeight: 250,
                margins: 5,
                lastRow: 'nojustify',
            })
        
  





    // $('#bantu_bayar').on('click touchstart tap', function () {
    //     console.log('testing');
    //     $('#modal-bayar').modal('show');
    // })
    
    $('#filed_kehadiran').show()


    $('.bantu_bayar2').on('click touchstart tap', function () {
        console.log('testing');
        $('#modal-bayar').modal('show');
        return 1;
    })


    $('.rek_copy').on('click touchstart tap', function () {
        console.log('clicked');
        $(this).text('copied!');

        alertMe($(this));
        return 1;
    })

    function alertMe(btn) {
        setInterval(function(){
            btn.text('copy');
        },1000);
    }



  $('#btn_titip').on('click touchstart tap', function () {
    console.log('testing');
    pembayaran()
  })


// var loadChart = $('#id_salam_penutup'),
//     loadChartTop = $('#id_salam_penutup').offset().top;

    window.onscroll = function(){
        var scrollPos = $(document).scrollTop();
        if(scrollPos + window.innerHeight >= loadChartTop){
            pembayaran()
            // remove onscroll callback
            window.onscroll = null;
        }
    }



    // munculkan demo button
    var urlParams = new URLSearchParams(window.location.search);
    var sectionName = urlParams.get('contoh');
    if (sectionName == 1) {
        $('#head_buat').show();
        $('#animasi_ucapan').remove();
    }

    if (demoParam == 1) {
        $('#animasi_ucapan').remove();
    }



  function pembayaran() {

    $('#modal-bayar').modal('show');
    $('#form_bayar').show();
    $('#frame_bayar').hide();

        // $.get("https://indoinvite.com/admin/pembayaran/cek-url/"+id, function( data ) {
        //     if (data == 1) {
        //         return
        //     } if (data == 0) {
        //         console.log('buka pembayaran');
        //         $('#titip_hadiah_modal').modal('show');
        //         $('#pernikahan_id2').val(id);
        //         $('#form_bayar').show();
        //         $('#frame_bayar').hide();
        //     } else {
        //         $('#form_bayar').hide();
        //         $('#frame_bayar').show();
        //         frame = '<iframe src="'+ data +'" height="500" width="100%" title="Iframe Example"></iframe>';
        //         $('#frame_bayar').html(frame);
        //         console.log('buka pembayaran');
        //         $('#titip_hadiah_modal').modal('show');
        //         // $('#pernikahan_id2').val(id);
        //     }
        // })
        // .fail(function (err) {
        //     console.log('error get ajax feature category with: '+ err);
        //     // $('#show_dataactive').html('<p>Error get data</p>');
        // });

    }


    $(function(){
        $("#form_pembayaran").submit(function(){
        var harga = $('#total_bayar_data').val();
        $.ajax({
        url:$(this).attr("action"),
        data:$(this).serialize(),
        type:$(this).attr("method"),
        dataType: 'html',
        beforeSend: function() {
            $("input").attr("disabled",true);
            $("button").attr("disabled",true);
            $("#btn_pembayaran").html('Menyimpan ...');
        },
        complete:function() {
            $("input").attr("disabled",false);
            $("button").attr("disabled",false);
            $("#btn_pembayaran").html('CHECKOUT');
        },
        success:function(hasil) {
            // console.log(hasil);
            // gtag('event', 'checkout_web', {
            //     'value' : 69000,
            //     'currency' : 'IDR'
            // });
            window.dataLayer.push({
                'event': 'checkout_web'
            });
            console.log("TOTAL BAYAR: "+harga);

            if (hasil != 0) {
                $('#form_bayar').hide();
                $('#frame_bayar').show();
                frame = '<iframe src="'+ hasil +'" height="500" width="100%" title="Iframe Example"></iframe>';
                $('#frame_bayar').html(frame);
            }
            console.log(hasil);
        }
        })
        return false;
        });
    });





    // var d = di-da;
    // default example

    simplyCountdown('.simply-countdown-one', {
        year: 2025,
        month: 07,
        day: 02,
        enableUtc: false,
        hours: 08, // Default is 0 [0-23] integer
        minutes: 00, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
    });

    function openLink2(url) {
        window.location.href = url;
    }

    if ($('#salamAgama').val() == '6') {
        $('#customAgamaInput').show();
    } else {
        $('#customAgamaInput').hide();
    }

    // Tampilkan input teks jika pilihan "Custom" dipilih
    $('#salamAgama').change(function() {
        if ($(this).val() == '6') {
            $('#customAgamaInput').show();
        } else {
            $('#customAgamaInput').hide();
        }
    });
    $(".simply-countdown").attr("data-id", 958000);
    $(".countdown-acara").append(`
    <div data-aos="fade-up" style="width:100%; justify-content:center;">
        <a onclick="saveToCalendar()" class="btn btn-save-the-date" style="    position: relative;
        display: flex;
        margin: 0 auto;
        color: #fff;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        margin-top: 10px;
        background: black;
        color: white;
        border: 1.5px solid black;
        fill: white;" target="_blank">Save To Calendar</a>
    </div>`
    );
        function saveToCalendar() {
        var event = "Undangan Khitanan Bpk Noviandi &amp; Ibu Tria";
        var month = '07';
        var date = '02';
        var th  = '2025';
        var link = 'https://calendar.google.com/calendar/u/0/r/eventedit?text='+event+'&dates='+th+month+date+'T080000/'+th+month+date+'T090000';
        window.open(link, '_blank');
    }
    
    $(document).ready(function() {
        

        
        
                
        $("#data-pernikahan-form").submit(function() {
            // Disable the submit button to prevent double-click
            $("#btn-id-buat-re").prop("disabled", true);

            // Optionally, you can re-enable the button after a delay
            setTimeout(function() {
                $("#btn-id-buat-re").prop("disabled", false);
            }, 5000); // 5000 milliseconds (adjust as needed)

            window.dataLayer.push({
                'event': 'buat_acara_baru_re',
                // 'jenis_acara': acara,
                // 'date_acara': date
            });

            return true;
        });


        setTimeout(function () {
            anime({
                targets: '#kucing_imut',
                opacity: 0,
                duration: 1000,
            });
            setTimeout(function () {
                $('#kucing_imut').hide();
            }, 1000);

        }, 2000);


        var cekUcapan = localStorage.getItem('isiUcapan');
        if (cekUcapan) {
                                            }


        // validasi max 10 input peserta
        $("#jumlah_datang_id").on("blur", function() {
            var value = parseInt($(this).val());

            if (isNaN(value) || value < 0 || value > 10) {
                // alert("Please enter a valid integer between 0 and 10.");
                $(this).val("");
                $('#alert_data_ucapan').text('Maksimal jumlah hadir adalah 10 orang');
            } else {
                $('#alert_data_ucapan').text('');
            }
        });



        var myParam = location.search.split('kpd=')[1];
        $('#konfir_nama').val(myParam);
        // console.log(myParam);
        $('#notif_wa').hide();

        localStorage.setItem('958000', true);
        localStorage.setItem('nama', myParam);

        var cekNama = localStorage.getItem('958000-nama');

        if (cekNama == 'undefined' || cekNama == '' || cekNama == null) {
            $('#qrcode_id').hide();
            if (cekNama != myParam) {
                localStorage.setItem('958000-nama', myParam)
            }
        } else {
            $('#qrcode_id').show();
        }

        var idTamu = new URLSearchParams(window.location.search).get('id');
        if(idTamu) localStorage.setItem('958000-idTamu', idTamu)

        setInterval(function () {
            animUcapan()
        }, 6000);

        setTimeout(function() {
            loadUcapan();
        }, 3000);



        anime({
            targets: '.flower-anim',
            rotate: {
                value: 30,
                duration: 3000,
                easing: 'easeInOutSine'
            },
            scale: 1.5,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });

        // $('a[href^="http"]').attr('target','_blank');





    });


    // ketika klik buka undangan

    $('#music_list_id').on('change', function() {
        var selectedOption = $(this).val();
        var audio = document.getElementById('prev_mp3');
        console.log(selectedOption);
        $('#prev_mp3').attr('src', '/'+selectedOption);
        $('#prev_mp3').trigger('load');
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
        $('#play_mp3').text('Play Audio');
    });

    function playMp3() {
        var audio = document.getElementById('prev_mp3');

        if (audio.paused) {
            audio.play();
            $('#play_mp3').text('Pause Audio');
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning
            $('#play_mp3').text('Play Audio');
        }

    }


    $("#push_ucapan").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
        var buttonText = $('#tombol_kirim_2').text();
        $('#tombol_kirim_2').prop('disabled', true);
        $('#konfir_nama_2').prop('readonly', true);
        $('#ucapan_2').prop('readonly', true);
        $('#tombol_kirim_2').text('Mengirim ...');


        var form = $(this);
        var actionUrl = form.attr('action');


        var formTambahan = [];

        $("#formContainer .form-value").each(function(){
            formTambahan.push({
                field_name: $(this).data('field_name'),
                value: $(this).val().trim()
            })
        })

        // Display the collected data in the console
        // console.log(formData2);

        // var formTambahan = '';
        // if (formData2.length > 0) {
        //     var formTambahan = formData2.join(", ");
        // }

        var csrfToken = $('meta[name="csrf-token"]').attr('content');

        var myData = {
            _token: csrfToken,
            pernikahan_id: '958000',
            nama: $('#konfir_nama_2').val(),
            ucapan: $('#ucapan_2').val(),
            formTambahan,
            wa_tamu: $('#wa_tamu').val(),
            email_tamu: $('#email_tamu').val(),
            notif: $('#notif').val(),
            ket_hadir: $('#hadir_id').val(),
            jumlah: $('#jumlah_datang_id').val()
        };


        // var myData = form.serialize();
        // console.log(myData);

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: myData, // serializes the form's elements.
            beforeSend: function(xhr) {
                        // Set the CSRF token in the request header
                        xhr.setRequestHeader("X-CSRFToken", csrfToken);
                    },
            success: function(data)
            {
                loadUcapan()
                $('#tombol_kirim_2').prop('disabled', false);
                $('#ucapan_2').val('');
                $('#konfir_nama_2').prop('readonly', false);
                $('#ucapan_2').prop('readonly', false);
                $('#tombol_kirim_2').text(buttonText);
                $('#push_ucapan').after('<p id="notif-submt" style="line-height: 14px;font-weight: 200;font-size: 12px;margin-top: 20px;background-color: #fff8d5;border-radius: 5px;color: #3b3b3b;padding: 5px;">Thank you, Your message has been successfully submitted</p>');
                pembayaran()
                openShop()
                localStorage.setItem('isiUcapan', true);
                const kpd = "Bapak Budi"
                if(kpd){
                  localStorage.setItem('ucapanForm-958000-' + "Bapak+Budi", true);
                }
                isUserFilledKehadiranForm()
                setTimeout(function() {
                    $('#notif-submt').hide()
                }, 7000);
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                console.log('Kirim ucapan gagal: '+ msg);
                $('#tombol_kirim_2').prop('disabled', false);

                $('#konfir_nama_2').prop('readonly', false);
                $('#ucapan_2').prop('readonly', false);
                $('#tombol_kirim_2').text('Kirim');


            },

        });

    });

    function isUserFilledPopupKehadiranForm(){
      const key = 'ucapanPopup-958000-' + "Bapak+Budi"
      const isFilled = localStorage.getItem(key) ? true : false
      if(isFilled){
        $('#filed_kehadiran').css('display', 'none')
        $('#hadir_id').val(1)
        $('#formContainer').remove()
        $('.custom-form').remove()
        $('#notifPopupFill').css('display', 'block')
      }
    }
    isUserFilledPopupKehadiranForm()

    function isUserFilledKehadiranForm(){
      const key = 'ucapanForm-958000-' + "Bapak+Budi"
      const isFilled = localStorage.getItem(key) ? true : false
      if(isFilled){
        $('#formContainer2').remove()
        $('#kehadiran-modal-body').remove()
        closeKehadrianModal()
        $('#filed_kehadiran').remove()
        $('#wa3').remove()
        $('.custom-form').remove()
        $('#notifPopupFill').css('display', 'block')
      }
    }
    isUserFilledKehadiranForm()

    function resetKehadiran(){
      const ucapanPopupKey = 'ucapanPopup-958000-' + "Bapak+Budi"
      const ucapanFormKey = 'ucapanForm-958000-' + "Bapak+Budi"
      localStorage.removeItem(ucapanPopupKey)
      localStorage.removeItem(ucapanFormKey)
      location.reload()
    }

    $("#push_ucapan_popup").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.


        $('#tombol_kirim_2_popup').prop('disabled', true);
        $('#konfir_nama_2_popup').prop('readonly', true);
        $('#ucapan_2_popup').prop('readonly', true);
        $('#tombol_kirim_2_popup').text('Mengirim ...');

        var form = $(this);
        var actionUrl = form.attr('action');

        var formTambahan = [];
        $("#formContainer2 .form-value").each(function(){
          formTambahan.push({
              field_name: $(this).data('field_name'),
              value: $(this).val().trim()
          })
        })

        var formDataObj = form.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        formDataObj.formTambahan = formTambahan;
        var myData = $.param(formDataObj);

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: myData, // serializes the form's elements.
            success: function(data)
            {
                loadUcapan()
                $('#tombol_kirim_2_popup').prop('disabled', false);
                $('#ucapan_2_popup').val('');
                $('#konfir_nama_2_popup').prop('readonly', false);
                $('#ucapan_2_popup').prop('readonly', false);
                $('#tombol_kirim_2_popup').text('Kirim');
                pembayaran()
                openShop()
                // localStorage.setItem('isiUcapan_958000', true);
                localStorage.setItem('isiUcapan', true);
                closeKehadrianModal()
                // console.log('DARI POPUP');
                const kpd = "Bapak Budi"
                if(kpd){
                  localStorage.setItem('ucapanPopup-958000-' + "Bapak+Budi", true);
                }
                isUserFilledPopupKehadiranForm()
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                console.log('Kirim ucapan gagal: '+ msg);
                $('#tombol_kirim_2_popup').prop('disabled', false);

                $('#konfir_nama_2_popup').prop('readonly', false);
                $('#ucapan_2_popup').prop('readonly', false);
                $('#tombol_kirim_2_popup').text('Kirim');


            },

        });

        });


    function loadUcapan() {
        $.get("https://indoinvite.com/pernikahan-ucapan/958000/ucapan", function( data ) {
            // console.log(data);

            $("#box_ucapan").html(data);
        });
    }

    $(document).on('click', '.pagination a', function(event){
        event.preventDefault();
        var page = $(this).attr('href').split('page=')[1];
        fetch_data(page);
    });

    function fetch_data(page)
    {
        $.ajax({
            url:"https://indoinvite.com/pernikahan-ucapan/958000/ucapan?page="+page,
            success:function(data)
            {
                $('#box_ucapan').html(data);
            }
        });
    }


    
    
    
    
    function aktifkanQRCode() {
        var cekNama = localStorage.getItem('958000-nama');

        if (cekNama == 'undefined' || cekNama == '' || cekNama == null) {
            $('#qrcode_id').hide();
        } else {
            $('#qrcode_id').show();
        }
    }


    $('.awal').on('click', function () {
        opened();
    })

    //hide the begining


    function opened() {
        let param = searchParams.get('kpd');
        // Cek key open
        if (!localStorage.getItem('open-958000')) {
            let data = {
                '_token': 'M7sIclDlMrmx1eFjR7vj06xC1xZyC0DPXHe77dWK',
            };

            // Jika `kpd` kosong, kirim data tanpa `nama_tamu`
            if (param) {
                data['nama_tamu'] = param;
            }

            $.ajax({
                url: '/count-open/958000',
                method: 'POST',
                data: data,
                success: function(response) {
                    // set true
                    localStorage.setItem('open-958000', true);
                },
                error: function(xhr, status, error) {
                    console.error('Gagal menghitung:', error);
                }
            });
        }

        $('#konfir_nama').val(param);
        if ($("#playAudio").length) {
            $("#playAudio").get(0).play();
        }
        if ($("#playAudioS").length) {
            $("#playAudioS").get(0).play(); //play musik
        }


        aktifkanQRCode();
        // document.documentElement.requestFullscreen();  //fullscreen
        setTimeout(function() {
            // bukaTamu();
        }, 10000);
        setTimeout(function() {
            // bukaProtokol();
        }, 5000);

        
        

        anime({
            targets: '.awal',
            translateY: 400,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            $(this).hide();
            $('.awal').remove();
        }, 500);
        runAnimationOrnament();
        runAnimationLoop();
        runAnimationWithoutScrollTrigger();
    }


    
    // count undangan dilihat
    $(document).ready(function() {
            // cek user pernah akses atau belum
            if (!localStorage.getItem('akses-958000')) {
                $.ajax({
                    url: '/count-view/958000',
                    method: 'POST',
                    data: {
                        '_token': 'M7sIclDlMrmx1eFjR7vj06xC1xZyC0DPXHe77dWK', // Token CSRF untuk keamanan
                        'pernikahan_id': 958000
                    },
                    success: function(response) {
                        console.log('Berhasil menghitung view');
                        // set true
                        localStorage.setItem('akses-958000', true);
                    },
                    error: function(xhr, status, error) {
                        console.error('Gagal menghitung view:', error);
                    }
                });
            }
        });

    // count copy rekening
    $('.rek_copy').click(function (e) {
        let norek = $(this).data("rek");
        navigator.clipboard.writeText(norek);

        e.preventDefault();
        if (!localStorage.getItem('copy-rek-958000')) {
            let data = {
                '_token': 'M7sIclDlMrmx1eFjR7vj06xC1xZyC0DPXHe77dWK',
            };

            // Jika `kpd` kosong, kirim data tanpa `nama_tamu`
            if (param) {
                data['nama_tamu'] = param;
            }

            $.ajax({
                url: '/count-copy-rek/958000',
                method: 'POST',
                data: data,
                success: function(response) {
                    // set true
                    localStorage.setItem('copy-rek-958000', true);
                },
                error: function(xhr, status, error) {
                    console.error('Gagal menghitung:', error);
                }
            });
        }
    });


    // Count maps click
    $('#c-acara-id a').click(function (e) {
        if (!localStorage.getItem('open-maps-958000')) {
            let data = {
                '_token': 'M7sIclDlMrmx1eFjR7vj06xC1xZyC0DPXHe77dWK',
            };

            // Jika `kpd` kosong, kirim data tanpa `nama_tamu`
            if (param) {
                data['nama_tamu'] = param;
            }

            $.ajax({
                url: '/count-open-maps/958000',
                method: 'POST',
                data: data,
                success: function(response) {
                    // set true
                    localStorage.setItem('open-maps-958000', true);
                },
                error: function(xhr, status, error) {
                    console.error('Gagal menghitung:', error);
                }
            });
        }
    });

    // count gallery
    $('#fh5co-gallery-list a,#galleryGrid a').click(function (e) {
        if (!localStorage.getItem('open-gallery-958000')) {
            let data = {
                '_token': 'M7sIclDlMrmx1eFjR7vj06xC1xZyC0DPXHe77dWK',
            };

            // Jika `kpd` kosong, kirim data tanpa `nama_tamu`
            if (param) {
                data['nama_tamu'] = param;
            }

            $.ajax({
                url: '/count-open-gallery/958000',
                method: 'POST',
                data: data,
                success: function(response) {
                    // set true
                    localStorage.setItem('open-gallery-958000', true);
                },
                error: function(xhr, status, error) {
                    console.error('Gagal menghitung:', error);
                }
            });
        }

    });
    
    function qrcode() {
        
        

    }

    function animUcapan() {
        

        var app = [{"id":2271311,"pernikahan_id":958000,"nama":"Team Indoinvite.com","wa_tamu":null,"ucapan":"Semoga acaranya berjalan dengan lancar dan sesuai rencana \ud83d\ude4f\ud83d\ude4f\ud83d\ude4f","anonim":0,"ket_hadir":0,"jumlah":0,"notif":null,"balasan":null,"password":null,"slug":null,"email_tamu":null,"created_at":"2025-06-13 19:03:33","updated_at":"2025-06-13 19:03:33"}];
        var rand = getRndInteger(0, app.length-1)

        $('#nama_tamu').text(app[rand]['nama']);
        $('#ucapan_tamu').text(app[rand]['ucapan']);

        anime({
            targets: '.animasi-ucapan',
            translateX: 70,
            opacity: 1,
            duration: 2000,
        });
        setTimeout(function() {
            anime({
                targets: '.animasi-ucapan',
                translateX: 0,
                opacity: 0,
                duration: 2000,
            });
        }, 5000);
            }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function bukaTamu() {
        var cekDevice = localStorage.getItem('958000');
        if (cekDevice) {
            $('.modal').modal('hide');
        } else {
            $('#exampleModal2').modal({backdrop: 'static', keyboard: false})
        }
    }

    function bukaProtokol() {

            $('#modal_protokol').modal({backdrop: 'static', keyboard: false})

    }

    function belum(params) {
        $('#exampleModal').modal({backdrop: 'static', keyboard: false})
    }

    function whatsappCheck(){
      const wa_number = '089506775502'
      const active = '0'
      if(active > 0 && !wa_number){
        openEditModal('notifikasi')
        $('#warning_wa').css('display', 'block')
        $('#wa_id').focus()
        $('#header_kd_notifikasi').css('pointer-events', 'none')
        $('#close_modal_element').css('pointer-events', 'none')
      }
    }
    whatsappCheck()

    function sanitizeHtml(str) {
      if (!str) return '';
      return str.replace(/<(?!\/?(b|i|u)\b)[^>]*>/gi, ''); // Only <b>, <i>, <u>
    }

    let searchParams = new URLSearchParams(window.location.search)
    searchParams.has('kpd')
    let param = sanitizeHtml(searchParams.get('kpd'))
    var cekNama = sanitizeHtml(localStorage.getItem('958000-nama'));
    // console.log(param)

        if (param == null || param == '' || param == 'null') {
            $('#konfir_nama_2').val(cekNama)
            $('#konfir_nama_2_popup').val(cekNama)
            $("#kpd").html(cekNama)
            $("#kpdn").html(cekNama)
            $("#kpd2").html(cekNama)
        } else {
            $('#konfir_nama_2').val(param)
            $('#konfir_nama_2_popup').val(param)
            $("#kpd").html(param)
            $("#kpdn").html(param)
            $("#kpd2").html(param)
        }





    $("#volume").click(function () {
		var bool = $("#playAudio").prop("muted");
        $("#playAudio").prop("muted",!bool);
        $("#playAudioS").prop("muted",!bool);



        if (bool === true) {
            $(this).css('background-color', '#4970ea');
        } else {
            $(this).css('background-color', '#4970ea00');
        }
    })



    function scrollToMap() {
        document.querySelector('.map_id2').scrollIntoView({behavior: 'smooth'});
    }

    function scrollToUcapan() {
        openKehadiranModal();
        document.querySelector('#push_ucapan').scrollIntoView({behavior: 'smooth'});
    }

    function scrollToGalery() {
        document.querySelector('#galery_id').scrollIntoView({behavior: 'smooth'});
    }

    function scrollToHome() {
        document.querySelector('#page').scrollIntoView({behavior: 'smooth'});
    }


    function konfir() {

        var csrf_token = $('meta[name="crsf_token"]').attr('content');
        var nama = $('#konfir_nama').val(); //error
        var wa = $('#konfir_wa').val();
        var ucapan = $('#ucapan').val();
        // console.log(ucapan);

        if (nama === '' && wa === '') {
            $('#belumisi').show();
        } else {
            $('.modal').modal('hide');
            $('#tombol_kirim').prop('disabled', true);
            $('#notif_kirim').show();
            $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url : 'https://indoinvite.com/konfir/store',
            type: "POST",
            data: {'_method': 'POST', '_token': csrf_token, 'nama': nama, 'wa': wa, 'ucapan': ucapan, 'id': '958000'},
            success: function(data) {
                var log = JSON.parse(data);
                if (log.status == true) {
                    localStorage.setItem('958000', true);
                } else {
                    $('#notif_wa').show();
                    $('#konfir_wa').addClass('warning-form');
                    $('#exampleModal2').modal({backdrop: 'static', keyboard: false});
                }
                $('#tombol_kirim').prop('disabled', false);
                $('#notif_kirim').hide();
            },
            error: function(){
                    console.log('error send notif');
                    $('#tombol_kirim').prop('disabled', false);
                    $('#notif_kirim').hide();
                }
            });
        }


        }

    function konfirAjax() {

    }

    function closeModal(id){
        $(id).hide();
    }


    // START TITIP KADO
    
    var kadoTerbuka = false;
    $('#header_kd_kembali').on('click', function () {
        $('#kado-pilih').show();
        $('#kado-konfir').hide();
        $('#kado-xendit').hide();
    })

    function toConfirKado() {
        $('#kado-pilih').hide();
        $('#kado-xendit').hide();
        $('#kado-konfir').show();
        // gtag('event', 'titip_kado_konfir');
        window.dataLayer.push({
            'event': 'titip_kado_konfir'
        });
    }

    function openShop() {
        
        

            $('#kado-modal').show();
            $('#img-kado-buka').show();

            anime({
                targets: '#kado-modal-body',
                translateY: 0,
                opacity: 1,
                duration: 500,
                easing: 'easeInOutSine'
            });

            window.dataLayer.push({
                'event': 'kado_list_view'
            });

        
                // if (kadoTerbuka == false) {
        //     $.get("https://indoinvite.com/kado/tracking-ajax/958000", function( data ) {
        //         // console.log(data);
        //         $("#produk_all").html(data);
        //     });
        //     kadoTerbuka = true;
        // }

    }

    function closeKadoModal() {


        anime({
            targets: '#kado-modal-body',
            translateY: 400,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            $('#kado-modal').hide();
        }, 500);
    }

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(number);
    }


    // var loadChart = $('#id_open_kado'),
    // loadChartTop = $('#id_open_kado').offset().top;

    // window.onscroll = function(){
    //     var scrollPos = $(document).scrollTop();
    //     if(scrollPos + window.innerHeight >= loadChartTop){
    //             //             openShop()
    //             //         $('#img-kado-buka').show();
    //         console.log('Kado Terbuka');
    //         // remove onscroll callback
    //         window.onscroll = null;
    //     }
    // }
    var totalKado = 0;
    var idKado = [];
    var kadoItems = [];
    function addToCartKado(id, harga, item) {
        totalKado = totalKado+harga;
        $('#idkado-'+id+'-add').hide();
        $('#idkado-'+id+'-remove').show();
        $('.total-kado-id').text(rupiah(totalKado));
        if (totalKado > 0) {
            $('#konfirmasi-btn-kado').prop('disabled', false);
        } else {
            $('#konfirmasi-btn-kado').prop('disabled', true);
        }
        idKado.push(id);
        kadoItems.push({
          'id': id,
          'item_name': item.nama_produk,
          'item_id': item.nama_produk.replace(/\s/g, ""),
          'price': item.harga_produk,
          'item_brand': 'Indoinvite',
          'item_category': 'Titip Kado',
          'item_list_name': 'Kado',
        })
        $('#kado-id-send').val(idKado);
        // console.log('HARGA: '+idKado);
    }

    function removeFromCartKado(id, harga) {
        totalKado = totalKado-harga;
        $('#idkado-'+id+'-add').show();
        $('#idkado-'+id+'-remove').hide();
        $('.total-kado-id').text(rupiah(totalKado));

        if (totalKado > 0) {
            $('#konfirmasi-btn-kado').prop('disabled', false);
        } else {
            $('#konfirmasi-btn-kado').prop('disabled', true);
        }
        var index = idKado.indexOf(id);
        if (index !== -1) {
            idKado.splice(index, 1);
            kadoItems.splice(index, 1);
        }
        $('#kado-id-send').val(idKado);

        // console.log('HARGA: '+idKado);

    }


    // submit kado
    var uuidKado = '';
    $("#submit-kado").submit(function(){
        // var harga = $('#total_bayar_data').val();
        $.ajax({
            url:$(this).attr("action"),
            data:$(this).serialize(),
            type:$(this).attr("method"),
            dataType: 'html',
            beforeSend: function() {
                $("input").attr("disabled",true);
                $("button").attr("disabled",true);
                $("#btn-pembayaran-kado").html('Memproses ...');
            },
            complete:function() {
                $("input").attr("disabled",false);
                $("button").attr("disabled",false);
                $("#btn-pembayaran-kado").html('CHECKOUT');
            },
            success:function(hasil) {
                // console.log(hasil);
                // gtag('event', 'titip_kado_submit', {
                //     'value' : 69000,
                //     'currency' : 'IDR'
                // });
                // console.log("TOTAL BAYAR: "+harga);

                let index = 1
                kadoItems = kadoItems.map(item => {
                  const { id, ...rest } = item
                  return {
                    ...rest,
                    'index': index++
                  }
                })

                // console.log(kadoItems)
                // console.log('harga: ' + totalKado)
                // console.log('unique id: ' + new Date().getTime() + Math.floor(Math.random() * 1000))

                window.dataLayer.push({
                  'event': 'purchase',
                    ecommerce: {
                      transaction_id: "T_" + new Date().getTime() + Math.floor(Math.random() * 1000), //generate ID Uniq
                      currencyCode: "IDR",
                      currency: "IDR",
                      affiliation: "Indoinvite",
                      value: totalKado, // total bayar
                      tax: 0,
                      shipping: 0,
                      coupon: "",
                      items: kadoItems
                    }
                });

                var data = JSON.parse(hasil);
                uuidKado = data['uuid'];

                if (hasil != 0) {
                    $('#kado-pilih').hide();
                    $('#kado-konfir').hide();
                    $('#kado-xendit').show();
                    frame = '<iframe style="height: 100%" src="'+ data['url'] +'" height="auto" width="100%" title="Iframe Example"></iframe>';
                    $('#frame-xendit-kado').html(frame);
                    setTimeout(function (){
                        $('#btn-tracking-kado').text('Lihat Tracking Kado');
                    }, 5000);


                }

                window.dataLayer.push({
                    'event': 'titip_kado_submit'
                });

            }
            })
        return false;
    });

    function lihatTracking() {
        var link = 'https://indoinvite.com/kado/tracking-kado/'+uuidKado
        window.open(link, '_blank');
        // console.log('LIHAT TRACKING KADO: '+link);
    }



    function onYouTubeIframeAPIReady() {
        var player;
        player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady,
        }
        });
    }

    // Function to autoplay the video when it's ready
    function onPlayerReady(event) {
        // You can adjust the threshold as needed
        var threshold = 600; // Number of pixels from the bottom to start autoplay
        var player = event.target;
        var videoTop = $('#youtube-video').offset().top;
        var autoplayStarted = false;

        $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        var videoPos = videoTop - $(window).height() + threshold;

        if (scrollPos >= videoPos && !autoplayStarted) {
            player.playVideo();
            autoplayStarted = true;
            console.log('PLAY VIDEONYAA');

                // pause auto scroll
                isPaused = true;
                $('#menu_auto_scroll').css('background-color', 'transparent');
                $('.notif_scroll').hide();

                // pause music
                $("#playAudio").prop("muted",true);
                $("#playAudioS").prop("muted",true);
                $(this).css('background-color', '#4970ea00');
        }
        });
    }


    // 60% SCROLL
    function calculateScrollPercentage() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const pageHeight = $(document).height();

        return (scrollTop / (pageHeight - windowHeight)) * 100;
    }


    $(window).scroll(function() {
        const scrollPercentage = calculateScrollPercentage();

        // If the user has scrolled 60% or more, open the modal
        if (scrollPercentage >= 60) {

            var cekUcapan = localStorage.getItem('isiUcapan_958000');
            if (!cekUcapan) {
                openKehadiranModal()
            }



            // Unbind the scroll event to prevent the modal from reopening
            $(window).off("scroll");
        }
    });

    function closeKehadrianModal() {
        anime({
            targets: '#kehadiran-modal-body',
            translateY: 400,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            $("#menu-kehadiran-bawah").css("opacity", 0);
            $("#menu-kehadiran-bawah").css("transform", "scale(2.5)");
            anime({
                targets: '#menu-kehadiran-bawah',
                scale: 1,
                opacity: 1,
                duration: 1000,
                easing: 'easeInOutSine'
            });
        }, 400);

        setTimeout(function() {
            $('#kehadiran-modal').hide();

        }, 500);



    }


    function openKehadiranModal() {
        // alert(demoParam)
        if (contohParam != 1) {
            if (demoParam == null) {
                $('#kehadiran-modal').show();
                // alert('haloo');
                $("#menu-kehadiran-bawah").css("opacity", 0);
                anime({
                    targets: '#kehadiran-modal-body',
                    translateY: 0,
                    opacity: 1,
                    duration: 500,
                    easing: 'easeInOutSine'
                });
            }
        }

    }



    function closeAmplopModal() {
        anime({
            targets: '#amplop-modal-body',
            translateY: 400,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            $('#amplop-modal').hide();

        }, 500);



    }


    function openAmplopModal() {
        $('#amplop-modal').show();
        anime({
            targets: '#amplop-modal-body',
            translateY: 0,
            opacity: 1,
            duration: 500,
            easing: 'easeInOutSine'
        });
        console.log('open modal');
    }


    // Start Gift
    function closeGiftModal() {
        anime({
            targets: '#gift-modal-body',
            translateY: 400,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            $('#gift-modal').hide();

        }, 500);



    }


    function openGiftModal() {
        $('#gift-modal').show();
        anime({
            targets: '#gift-modal-body',
            translateY: 0,
            opacity: 1,
            duration: 500,
            easing: 'easeInOutSine'
        });
        console.log('open modal');

        window.dataLayer.push({
            'event': 'gift_list_view'
        });
    }

    var idGift = '';
    var koinGift = '';
    var imgGift = '';
    function addToCartGift(id, koin, img) {
        idGift = id;
        koinGift = koin;
        imgGift = img;

        $('.grid-item-gift').removeClass('selected-gift');
        $('.btn_gift_item').removeClass('btn_gift_item_selec');
        $('.btn_gift_item').text('Select');


        $('#btn_sel_gift_'+id).text('Selected');
        $('#list_gift_'+id).addClass('selected-gift');
        $('#btn_sel_gift_'+id).addClass('btn_gift_item_selec');

        $('#total_koin_gift').text(koin);

        $('#konfirmasi-btn-gift').prop('disabled', false);

        // set di halaman confirm
        $('#confirm-gift-img').prop('src', img);
        $('#confirm-koin-id').text(koin);
        $('.total-gift-id').text(rupiah(koin*1500));
        $('#gift-id-send').val(id);
    }

    function toConfirmGift() {

        // gtag('event', 'titip_kado_konfir');
        window.dataLayer.push({
            'event': 'gift_konfir'
        });

        anime({
            targets: '#div-list-gift',
            translateX: -200,
            opacity: 0,
            duration: 200,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {
            anime({
                targets: '#div-confirm-gift',
                translateX: 0,
                opacity: 1,
                duration: 200,
                easing: 'easeInOutSine'
            });

            $('#gift-konfir').show();

        }, 100);




        setTimeout(function() {
            $('#gift-pilih').hide();
            $('#gift-xendit').hide();

        }, 200);
    }

    function toListGift() {
        anime({
            targets: '#div-confirm-gift',
            translateX: 200,
            opacity: 0,
            duration: 200,
            easing: 'easeInOutSine'
        });

        setTimeout(function() {


            anime({
                targets: '#div-list-gift',
                translateX: 0,
                opacity: 1,
                duration: 200,
                easing: 'easeInOutSine'
            });

            $('#gift-pilih').show();

        }, 100);




        setTimeout(function() {
            $('#gift-konfir').hide();
            $('#gift-xendit').hide();

        }, 200);
    }


    var uuidGift = '';
    $("#submit-gift").submit(function(){
        // var harga = $('#total_bayar_data').val();
        $.ajax({
            url:$(this).attr("action"),
            data:$(this).serialize(),
            type:$(this).attr("method"),
            dataType: 'html',
            beforeSend: function() {
                $("input").attr("disabled",true);
                $("button").attr("disabled",true);
                $("#btn-pembayaran-gift").html('Memproses ...');
            },
            complete:function() {
                $("input").attr("disabled",false);
                $("button").attr("disabled",false);
                $("#btn-pembayaran-gift").html('CHECKOUT');
            },
            success:function(hasil) {
                // console.log(hasil);
                // gtag('event', 'titip_kado_submit', {
                //     'value' : 69000,
                //     'currency' : 'IDR'
                // });
                // console.log("TOTAL BAYAR: "+harga);
                var data = JSON.parse(hasil);
                
                if (hasil != 0) {
                    $('#gift-pilih').hide();
                    $('#gift-konfir').hide();
                    $('#gift-xendit').show();
                    frame = '<iframe style="height: 100%" src="'+ data['url'] +'" height="auto" width="100%" title="Iframe Example"></iframe>';
                    $('#frame-xendit-gift').html(frame);
                    setTimeout(function (){
                        $('#btn-tracking-gift').text('Selesai');
                    }, 5000);


                }

                window.dataLayer.push({
                    'event': 'gift_submit'
                });

                // $("#btn-pembayaran-gift").html('Selesai');

            }
            })
        return false;
    });

    function reloadGift() {
        document.querySelector('#box_ucapan').scrollIntoView({behavior: 'smooth'});
        loadUcapan()
        closeGiftModal()
    }


    // End Gift



// pindahkan ini nanti ke realtime-edit.js
function openEmbed(embedUrl) {
    $('#embed-info').empty();
    var embedCode = '<iframe src="' + embedUrl + '" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';
    $('#embed-info').html(embedCode);
    openEditModal('info')
}

function embedLink(embedUrl) {
    $('#embed-link').empty();
    var embedCode = '<iframe src="' + embedUrl + '" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';
    $('#embed-link').html(embedCode);
    openEditModal('embed');

    $('#embed-link iframe').on('load', function() {
        $('#loader').hide();
        $('#loader-container').hide();
    });

    $('#loader').show();
    $('#loader-container').show();
}

function saveLink() {
    var event = "Undangan Khitanan Bpk Noviandi &amp; Ibu Tria";
    var month = '07';
    var date = '02';
    var th  = '2025';
    var link = 'https://calendar.google.com/calendar/u/0/r/eventedit?text='+event+'&dates='+th+month+date+'T080000/'+th+month+date+'T090000';
    window.open(link, '_blank');
}


// mouseflow
window._mfq = window._mfq || [];
window._mfq.push(["setVariable", "paket", "0"]);


// popup gambar
if (document.querySelector("#fh5co-gallery-list")) {
    $('#fh5co-gallery-list').magnificPopup({
        delegate: 'a.image-popup',
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        tLoading: 'Loading image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('.case-studies-summary');
            }
        },
        image: {
          markup: `<div class="mfp-figure">
              <div class="mfp-close"></div>
              <div style="position: relative; display: inline-block;">
                <img class="mfp-img"/>
                <a id="download-btn" href="#" target="_blank"
                  style="
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 9;
                    display: inline-block;
                    color: #fff;
                    background: #333;
                    padding: 10px;
                    text-decoration: none;
                    margin-bottom: 3px;
                  ">
                  <svg style="display: inline; color: white;" class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                  </svg>
                  Download
                </a>
              </div>
          </div>`,
          titleSrc: function(item) {
            setTimeout(function () {
              fetch(item.src, { mode: 'cors' })
                .then(res => res.blob())
                .then(blob => {
                  const url = URL.createObjectURL(blob);
                  const fileName = item.src.split('/').pop();
                  const a = document.getElementById('download-btn');
                  a.href = url;
                  a.setAttribute('download', fileName);
                })
                .catch(() => {
                  $('#download-btn').attr('href', item.src);
                });
            }, 10);
          }
        },
    });
}
if(document.querySelector("#galleryGrid")){
    $('#galleryGrid').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
		},
    image: {
      markup: `<div class="mfp-figure">
              <div class="mfp-close"></div>
              <div style="position: relative; display: inline-block;">
                <img class="mfp-img"/>
                <a id="download-btn" href="#" target="_blank"
                  style="
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 9;
                    display: inline-block;
                    color: #fff;
                    background: #333;
                    padding: 10px;
                    text-decoration: none;
                    margin-bottom: 3px;
                  ">
                  <svg style="display: inline; color: white;" class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                  </svg>
                  Download
                </a>
              </div>
            </div>`,
      titleSrc: function(item) {
        setTimeout(function () {
          fetch(item.src, { mode: 'cors' })
            .then(res => res.blob())
            .then(blob => {
              const url = URL.createObjectURL(blob);
              const fileName = item.src.split('/').pop();
              const a = document.getElementById('download-btn');
              a.href = url;
              a.setAttribute('download', fileName);
            })
            .catch(() => {
              $('#download-btn').attr('href', item.src);
            });
        }, 10);
      }
    }
	});
}
if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
    title: " Undangan Khitanan Bpk Noviandi &amp; Ibu Tria ",
    artist: "Undangan Online",
    artwork: [
        {
        src: "https://sin1.contabostorage.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/sampul_9580001749812730.jpeg",
        sizes: "512x512",
        type: "image/webp",
        },
    ],
    });
}

const scrollToBox2 =  () => {
            $('.mouse_scroll').click(function (e) {
                e.preventDefault();
                document.querySelector('.box-2').scrollIntoView({behavior: 'smooth'});
            });
        }


function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

if (getCookieValue('is-mobile') == 'yes') {
    localStorage.setItem('isMobile', true);
}

// CEK IS MOBILE APK
let searchP = new URLSearchParams(window.location.search)
let params1 = searchP.get('utm_campaign');
if (params1 == 'mobile-app') {
    // console.log('MASUK CEK UTM');
    localStorage.setItem('isMobile', true);
}
var cekMobile = localStorage.getItem('isMobile');
if (cekMobile) {
    // console.log('MASUK GANTI TEKS');
    $('#download_app').hide();
    var fileInputs = $('input[type="file"]');
    fileInputs.each(function() {
        $(this).after('<div style="background-color: #000; padding: 2px 10px;"><img style="width:20px; float: left; margin-right: 5px; margin-top: 6px;" src="https://indoinvite.com/warning.png"><p style="font-size: 10px; color: #fff !important; line-height: 13px;">Fitur ini mungkin tidak support di beberapa device. Lanjutkan edit di chrome dengan akses indoinvite.com/login</p></div>');
    });

}


var jsonStyleCustomTema = null;

if(!jsonStyleCustomTema) { // temporary
  jsonStyleCustomTema = {"hide_foto_sampul1":"1","hide_foto_sampul2":0};
}

// $('#c-link-id h1 span').css('margin-top', '500px');
// console.log(json.style);

function applyStylesFromJson(jsonData) {
  // Traverse top-level keys in JSON
  Object.keys(jsonData).forEach((selectorKey) => {
    const selector = `${selectorKey}`; // Convert key to ID selector (e.g., "cLink" -> "#cLink")
    const styles = jsonData[selectorKey];

    // Apply styles to the target selector
    // console.log(styles);

    applyStylesToSelector(styles, selector);
  });
}

function applyStylesToSelector(styles, selector) {
    var elstyle = '';
    selector = selector.replace(/@/g, ' ').replace(/!/g, '.');
    Object.keys(styles).forEach((key) => {
        if (styles[key] == '' || styles[key] == 'default') {
            // jika style kosong, maka jangan di proses
            return;
        }
        if (typeof styles[key] === "object") {
            // Recursive call for nested objects
            applyStylesToSelector(styles[key], selector);
        } else {
            // Apply style if key-value pair represents CSS
            const cssKey = key.replace(/_/g, '-'); // Convert keys like 'margin_top' to 'margin-top'
            //   $(selector).css(cssKey, styles[key]);
            //   console.log(`${selector}.css(${cssKey},${styles[key]})`);
            if (!isNaN(parseFloat(styles[key]))) {
              if (!styles[key].toString().endsWith('px')) { // jika tidak ada px

                if(selector.includes('img') && key == 'width'){ // jika itu image dan width
                  styles[key] = styles[key] + '%';
                } else {
                  styles[key] = styles[key] + 'px';
                }
              }
            }

            elstyle = elstyle+`${cssKey}:${styles[key]} !important; `;
        }
    });
    var currentStyle = $(selector).attr('style');
    if (typeof currentStyle === 'undefined') {
        currentStyle = '';
    }

    if (selector.includes('.')) {
        // jika selector berupa class, maka hanya berimpact pada 1 class saja
        $(selector).eq(0).attr('style', currentStyle + ';' + elstyle);
    } else {
        $(selector).attr('style', currentStyle + ';' + elstyle);
    }


            }

applyStylesFromJson(jsonStyleCustomTema.style);




                document.addEventListener('DOMContentLoaded', function () {
                    var splide = new Splide('.splide', {
                        type: 'fade',
                        rewind: true,
                        autoplay: true,
                        pagination: false,
                        arrows: false,
                        // easing: 'ease 2s',
                        speed: 2000
                    });
                    splide.mount();
                });

            