<?php
include 'api.php';

$api = new PHP_CRUD_API(array(
	'dbengine'=>'MySQL',
	'hostname'=>'localhost',
    'username'=>'shareit',
    'password'=>'d*8I(B7zR)[',
    'database'=>'shareitdb',
	'charset'=>'utf8'
));
$api->executeCommand();
