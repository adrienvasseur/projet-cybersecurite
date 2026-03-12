<?php require_once __DIR__ . '/../getRacine.php'; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($titre ?? 'Instagram'); ?></title>
  <meta name="description" content="Create an account or log in to Instagram.">
  <link rel="icon" type="image/png" href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png">
  <link rel="shortcut icon"         href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php echo $contenu ?? ''; ?>
<?php echo $shared  ?? ''; ?>
<script src="controleur/app.js"></script>
</body>
</html>
