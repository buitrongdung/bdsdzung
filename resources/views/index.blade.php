<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="img/fav.png">
        <title>{{config('app.name')}}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}">
        <link rel="stylesheet" href="{{asset('css/ion.rangeSlider.css')}}" />
        <link rel="stylesheet" href="{{asset('css/ion.rangeSlider.skinFlat.css')}}" />
        <link rel="stylesheet" href="{{asset('css/linearicons.css')}}">
        <link rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}">
        <link rel="stylesheet" href="{{asset('css/magnific-popup.css')}}">
        <link rel="stylesheet" href="{{asset('css/nice-select.css')}}">

        {{--<link rel="stylesheet" href="{{asset('css/animate.min.css')}}">--}}
        {{--<link rel="stylesheet" href="{{asset('css/jquery-ui.css')}}">--}}
        <link rel="stylesheet" href="{{asset('css/owl.carousel.css')}}">
        <link rel="stylesheet" href="{{asset('css/main.css')}}">

        @auth
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css ')}}" />
        <link rel="stylesheet" href="{{asset('css/bootstrap-responsive.min.css ')}}" />
        <link rel="stylesheet" href="{{asset('css/fullcalendar.css ')}}" />
        <link rel="stylesheet" href="{{asset('css/maruti-style.css ')}}" />
        <link rel="stylesheet" href="{{asset('css/maruti-media.css ')}}" class="skin-color" />
        <link rel="stylesheet" href="{{asset('css/maruti-login.css ')}}" />
        @endauth
        <script>
            window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
            'base_url' => env("BASE_URL"),
        ]) !!};
        </script>

    </head>
    <body>
    <div id="app">
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
            crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jquery-2.2.4.min.js ')}}"></script>
    <script src="{{asset('js/vendor/bootstrap.min.js ')}}"></script>
    {{--<script src="{{asset('js/ion.rangeSlider.js')}}"></script>--}}
    <script src="{{asset('js/plugins.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/main.js')}}"></script>
    @auth
    <script src="{{asset('js/excanvas.min.js ')}}"></script>
    <script src="{{asset('js/jquery.min.js ')}}"></script>
    <script src="{{asset('js/jquery.ui.custom.js ')}}"></script>
    <script src="{{asset('js/bootstrap.min.js ')}}"></script>
    <script src="{{asset('js/jquery.flot.min.js ')}}"></script>
    <script src="{{asset('js/jquery.flot.resize.min.js ')}}"></script>
    <script src="{{asset('js/jquery.peity.min.js ')}}"></script>
    <script src="{{asset('js/fullcalendar.min.js ')}}"></script>
    <script src="{{asset('js/maruti.js ')}}"></script>
    <script src="{{asset('js/maruti.dashboard.js ')}}"></script>
    <script src="{{asset('js/maruti.chat.js ')}}"></script>
    {{--<script src="{{asset('js/public/maruti.login.js')}}"></script>--}}
    @endauth

    <script src="{{mix('/js/manifest.js')}}"></script>
    <script src="{{mix('/js/vendor.js')}}"></script>
    <script src="{{mix('/js/app.js')}}"></script>
    </body>
</html>
