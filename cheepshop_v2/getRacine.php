<?php
/**
 * Utilitaire : retourne le chemin relatif vers la racine du projet
 */
function getRacine(): string {
    $depth = substr_count($_SERVER['SCRIPT_NAME'], '/') - 1;
    return str_repeat('../', $depth);
}
?>
