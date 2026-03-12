<?php
/**
 * Modèle : Utilisateur CheepShop
 */
class Utilisateur {
    public string $id;
    public string $prenom;
    public string $nom;
    public string $email;
    public string $motDePasse;

    public function __construct(array $data = []) {
        $this->id         = $data['id']         ?? uniqid('u_');
        $this->prenom     = $data['prenom']      ?? '';
        $this->nom        = $data['nom']         ?? '';
        $this->email      = $data['email']       ?? '';
        $this->motDePasse = $data['motDePasse']  ?? '';
    }
}

/** Compte démo pré-enregistré (sio / sio) */
function getDemoCompte(): Utilisateur {
    return new Utilisateur([
        'id'         => 'demo_sio',
        'prenom'     => 'Sio',
        'nom'        => 'Demo',
        'email'      => 'sio',
        'motDePasse' => 'sio',
    ]);
}
?>
