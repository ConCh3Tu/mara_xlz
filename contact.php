<?php

    require 'inc/class/lenguaje.php';

    if ( $_GET ) {
      $key = ( isset($_GET['lang']) ) ? $_GET['lang'] : 'en';        
    }   

    $idioma = new Lenguaje( $key );
    $diccionario = $idioma->getIdioma();
    $template = file_get_contents('inc/tpl/contact.tpl.html');
    
    foreach ($diccionario as $clave => $valor) {
        $template = str_replace('{'.$clave.'}', $valor, $template);
    }

    echo $template;        
    
 ?>