<?php
require 'auth.php';

$auth = new PHP_API_AUTH(array(
	'authenticator'=>function($user,$pass){ if ($user=='admin' && $pass=='admin') $_SESSION['user']=$user; }
));
$auth->executeCommand();
?>