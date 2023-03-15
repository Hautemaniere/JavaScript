<?php


$data = json_decode(file_get_contents('php://input'), true);
$retour[0] = $data['key1'];
$retour[1] = $data['key2'];

echo json_encode($retour);

?>
