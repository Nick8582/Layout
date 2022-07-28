<?php
    $to = "<exp-unlock@yandex.ru>";
    $from = "From: Заявка с сайта Строительные экспертизы\n\r ";
    $name = $_POST['nameModal'];
    $phone = $_POST['phoneModal'];
    $email = $_POST['emailModal'];
    $message = $_POST['messageModal'];
    $page = 'Заявка с Стройксперт';

    $messageEmail = 
    '<html>
    <body>
    <center>	
    <table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
     <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Информация c бокового меню</b></td></tr>
     <tr>
      <td><b>Откуда</b></td>
      <td>'.$page.'</td>
     </tr>
     <tr>
      <td><b>Адресат</b></td>
      <td><a href="mailto:'.$email.'">'.$email.'</a></td>
     </tr>
     <tr>
      <td><b>Имя и телефон</b></td>
      <td>'.$name.' тел: '.$phone.'</td>
     </tr>
     <tr>
      <td><b>Сообщение</b></td>
      <td>'.$message.'</td>
     </tr>
    </table>
    </center>	
    </body>
    </html>';

    $headers  = "Content-type: text/html; charset=utf-8\r\n";
    $result = mail($to, $name, $messageEmail, $headers);
?>