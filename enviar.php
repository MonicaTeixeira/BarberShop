<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/script.js"></script>

<?php

header('Content-Type: text/html; charset=utf-8');

//declarar as variaveis que recebemos pelo método post
$nome=$_POST["nome"];
$email=$_POST["email"];
$telefone=$_POST["telefone"];
$servico=$_POST["servico"];
$mensagem=$_POST["mensagem"];
$assunto="Novo Agendamento";
$body= utf8_decode("
Nome: $nome
Email: $email
Telefone: $telefone
Serviço: $servico
Mensagem: $mensagem");

//agora vamos enviar todos esses dados usando a função mail
$success=mail("kinhamiranda13@gmail.com","$assunto","$body","FROM:$nome<$email>");    

if (!$success) {

?> 
      <script>
            alert("Erro ao enviar o e-mail!");
      </script>

<?php

      header('Location: index.html');
}else{
      echo"Teste";

?>      
      <script>
            alert("Mensagem enviada com sucesso!");
            window.location.href="index.html";
      </script>

<?php

      //header('Location: index.html');  
}

?>
