<?php
/**
 * Modèle : Produit CheepShop
 */
class Produit {
    public int    $id;
    public string $nom;
    public string $marque;
    public string $categorie;
    public float  $prix;
    public ?float $ancienPrix;
    public string $badge;
    public float  $note;
    public int    $avis;

    public function __construct(array $data = []) {
        $this->id         = $data['id']         ?? 0;
        $this->nom        = $data['nom']         ?? '';
        $this->marque     = $data['marque']      ?? '';
        $this->categorie  = $data['categorie']   ?? '';
        $this->prix       = $data['prix']        ?? 0.0;
        $this->ancienPrix = $data['ancienPrix']  ?? null;
        $this->badge      = $data['badge']       ?? '';
        $this->note       = $data['note']        ?? 0.0;
        $this->avis       = $data['avis']        ?? 0;
    }
}
?>
