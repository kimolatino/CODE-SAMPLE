<?php
include("model/Empresa.class.php");
$action = filter_input(INPUT_GET, "action");
$mod = new Empresa();

switch ($action){
    case "listar":
        echo json_encode($mod->listar());
        break;
    
    default:
        // Se n�o receber nenhuma action, retorna para a tela de login
        header("Location: " . baseUrl());
        break;
}