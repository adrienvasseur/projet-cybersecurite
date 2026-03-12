<?php
class Utilisateur {
    public string $id;
    public string $prenom;
    public string $nom;
    public string $username;
    public string $email;
    public string $telephone;
    public string $motDePasse;
    public string $dateInscription;

    public function __construct(array $d = []) {
        $this->id              = $d['id']              ?? uniqid('u_');
        $this->prenom          = $d['prenom']          ?? '';
        $this->nom             = $d['nom']             ?? '';
        $this->username        = $d['username']        ?? '';
        $this->email           = $d['email']           ?? '';
        $this->telephone       = $d['telephone']       ?? '';
        $this->motDePasse      = $d['motDePasse']      ?? '';
        $this->dateInscription = $d['dateInscription'] ?? date('Y-m-d');
    }

    public function toArray(): array { return get_object_vars($this); }
}

function getDemoCompte(): Utilisateur {
    return new Utilisateur([
        'id'         => 'seed_001',
        'prenom'     => 'Camille',
        'nom'        => 'Martin',
        'username'   => 'camille.martin',
        'email'      => 'camille.martin@gmail.com',
        'motDePasse' => 'Camille2024!',
    ]);
}
?>
