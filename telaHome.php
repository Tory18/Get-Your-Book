<!DOCTYPE html>
<html>
<head>
    <title>Get Your Book</title>
    <style type="text/css">
        body {
            background: linear-gradient(244deg, rgba(250, 226, 226, 0.49) 21.98%, rgba(236, 199, 199, 0.49) 48.33%);
        }

        h1 {

            text-align: center;
            margin-top: 100px;
            margin-left: 10px;
            margin-right: 1150px;
            color: #4B1B0D;
            font-family: Petrona;
            font-size: 80px;
            font-style: normal;
            font-weight: 700;
            line-height: 50px;

        }

        img {
            position: absolute;
            top: 80px;
            left: 900px;
            max-width: 800px;
            max-height: 800px;
            width: auto;
            height: auto;
            flex-shrink: 0;
        }

        #Entrar {
            position: absolute;
            top: 470px;
            left: 300px;
            width: 135px;
            height: 40px;
            border-color: #F3BABA;
            border-radius: 20px;
            background: rgba(243, 186, 186, 0.50);

        }
    </style>
    </head>
    <body>
        <h1><br>Get Your</br><br>Book</br></h1>
        <img src="img/imagemInicial.png" />
        <button id="Entrar"><strong>Entrar</strong></button>
        <script>
            document.getElementById("Entrar").addEventListener("click", function(){
                window.location.href = "formulario_login.html";
            });

        </script>
    </body>
</html>