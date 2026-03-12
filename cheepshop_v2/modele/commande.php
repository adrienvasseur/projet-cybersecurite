<?php
/**
 * Modèle : Commande CheepShop
 */
class Commande {
    public string $id;
    public string $userId;
    public string $date;
    public string $total;
    public string $adresse;
    public string $statut;
    public array  $articles;

    public function __construct(array $data = []) {
        $this->id       = $data['id']       ?? uniqid('CSH-');
        $this->userId   = $data['userId']   ?? '';
        $this->date     = $data['date']     ?? date('d/m/Y');
        $this->total    = $data['total']    ?? '0,00 €';
        $this->adresse  = $data['adresse']  ?? '';
        $this->statut   = $data['statut']   ?? 'Livré';
        $this->articles = $data['articles'] ?? [];
    }
}
?>
