<?php
    $to = "<avan-exp@yandex.ru>";
    $from = "From: Заявка с сайта exp-stroi\n\r ";
    $phone = $_POST['inputTell2'];
    $page = 'Заявка с exp-stroi';

    $messageEmail =
    '<html>
    <body>
    <center>
    <table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
     <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Информация</b></td></tr>
     <tr>
      <td><b>Откуда</b></td>
      <td>'.$page.'</td>
     </tr>
     <tr>
      <td><b>Телефон</b></td>
      <td>тел: '.$phone.'</td>
     </tr>
    </table>
    </center>
    </body>
    </html>';

    $headers  = "Content-type: text/html; charset=utf-8\r\n";
    $result = mail($to, $name, $messageEmail, $headers);
?>