<?php
if (isset($_POST['submit'])) {

    include_once('config.php');
    $nome = ($_POST['nome']);
    $email = ($_POST['email']);
    $senha = ($_POST['senha']);
    $senhac = ($_POST['senhac']);

    $result = mysqli_query($conexao, "INSERT INTO tbl_cadastro(nome, email, senha, senhac) 
    VALUES ('$nome', '$email', '$senha', '$senhac')");

    header('Location: formulario_login.html');
    
}
?>