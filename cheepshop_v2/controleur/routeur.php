<?php
/**
 * Contrôleur : Routeur principal CheepShop
 * La navigation entre pages est gérée côté client (JavaScript SPA).
 * Ce fichier centralise les routes disponibles.
 */
$routes = [
    'home'     => '../vue/home.php',
    'search'   => '../vue/search.php',
    'product'  => '../vue/product.php',
    'cart'     => '../vue/cart.php',
    'checkout' => '../vue/checkout.php',
    'success'  => '../vue/success.php',
    'orders'   => '../vue/orders.php',
];

$action = isset($_GET['page']) ? $_GET['page'] : 'home';
$file   = $routes[$action] ?? $routes['home'];
require_once $file;
?>
