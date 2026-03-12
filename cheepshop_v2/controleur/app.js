
// ========================================================
// ===== DONNÉES PRODUITS (avec images Unsplash réelles) ===
// ========================================================
const products = [
  {
    id: 1, name: 'Robe Midi Fleurie', brand: 'Zara', cat: 'Femme',
    price: 49.99, oldPrice: 89.99, badge: 'promo', rating: 4.8, reviews: 247,
    colors: [
      { hex:'#1a56db', name:'Bleu marine',  images:['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80','https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80'] },
      { hex:'#e8272b', name:'Rouge',         images:['https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80','https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80'] },
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80'] },
    ],
    sizes: ['XS','S','M','L','XL'],
    desc: 'Robe midi légère en viscose florale, idéale pour les journées ensoleillées. Col V, manches courtes, doublure intérieure.',
  },
  {
    id: 2, name: 'Jean Slim Premium', brand: "Levi's", cat: 'Homme',
    price: 64.90, oldPrice: 89.90, badge: 'top', rating: 4.7, reviews: 189,
    colors: [
      { hex:'#1a56db', name:'Bleu denim',   images:['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80','https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80','https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80'] },
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80','https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80'] },
      { hex:'#6b7280', name:'Gris',          images:['https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80','https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80','https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80'] },
    ],
    sizes: ['28','30','32','34','36'],
    desc: 'Jean slim 5 poches en denim stretch premium. Coupe ajustée, finitions soignées. Fabriqué avec 20% de coton recyclé.',
  },
  {
    id: 3, name: 'Veste en Lin Beige', brand: 'H&M', cat: 'Femme',
    price: 34.99, oldPrice: null, badge: 'new', rating: 4.5, reviews: 83,
    colors: [
      { hex:'#f5f0e8', name:'Beige naturel', images:['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80','https://images.unsplash.com/photo-1555069519-127aadedf1ee?w=800&q=80'] },
      { hex:'#6b7280', name:'Gris chiné',    images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80'] },
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80'] },
    ],
    sizes: ['XS','S','M','L'],
    desc: 'Veste légère en lin naturel, coupe droite oversize. Boutons dorés, poches à rabat. Parfaite pour la mi-saison.',
  },
  {
    id: 4, name: 'Sneakers Running Air', brand: 'Nike', cat: 'Sport',
    price: 89.95, oldPrice: 119.95, badge: 'promo', rating: 4.9, reviews: 512,
    colors: [
      { hex:'#000',    name:'Noir/blanc',    images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80','https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80'] },
      { hex:'#fff',    name:'Blanc',         images:['https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80','https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80'] },
      { hex:'#e8272b', name:'Rouge',         images:['https://images.unsplash.com/photo-1583744946564-b52d01e7f922?w=800&q=80','https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&q=80','https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80'] },
      { hex:'#1a56db', name:'Bleu',          images:['https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80','https://images.unsplash.com/photo-1562183241-840b8af0721e?w=800&q=80','https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80'] },
    ],
    sizes: ['39','40','41','42','43','44'],
    desc: 'Sneakers running ultra-légères avec semelle Air. Tige en mesh respirant, amorti réactif. Idéales running et entraînement.',
  },
  {
    id: 5, name: 'T-Shirt Col V Coton', brand: 'H&M', cat: 'Homme',
    price: 12.99, oldPrice: 24.99, badge: 'promo', rating: 4.3, reviews: 421,
    colors: [
      { hex:'#fff',    name:'Blanc',         images:['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80','https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80'] },
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80','https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80'] },
      { hex:'#e8272b', name:'Rouge',         images:['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80','https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80','https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80'] },
      { hex:'#1a56db', name:'Bleu',          images:['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80','https://images.unsplash.com/photo-1587552280793-230e5571e4e3?w=800&q=80'] },
      { hex:'#10b981', name:'Vert',          images:['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80','https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80','https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80'] },
    ],
    sizes: ['XS','S','M','L','XL','XXL'],
    desc: 'T-shirt col V en coton biologique certifié GOTS. Coupe régulière confortable, jersey doux 180 g/m². Lavable à 30°.',
  },
  {
    id: 6, name: 'Sac Cabas Cuir', brand: 'Zara', cat: 'Accessoires',
    price: 59.99, oldPrice: null, badge: 'new', rating: 4.6, reviews: 156,
    colors: [
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'] },
      { hex:'#92400e', name:'Camel',         images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80'] },
      { hex:'#fff',    name:'Blanc crème',   images:['https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80','https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'] },
    ],
    sizes: [],
    desc: 'Sac cabas en cuir grainé véritable. Grand format, fermeture magnétique, poche intérieure zippée. Anses renforcées.',
  },
  {
    id: 7, name: 'Legging Sport Pro', brand: 'Adidas', cat: 'Sport',
    price: 39.99, oldPrice: 59.99, badge: 'promo', rating: 4.7, reviews: 334,
    colors: [
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80','https://images.unsplash.com/photo-1571945192201-2bc4d8a6f527?w=800&q=80','https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80'] },
      { hex:'#e8272b', name:'Rouge',         images:['https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80','https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80','https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80'] },
      { hex:'#1a56db', name:'Bleu marine',   images:['https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80','https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80'] },
      { hex:'#10b981', name:'Vert menthe',   images:['https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80','https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'] },
    ],
    sizes: ['XS','S','M','L','XL'],
    desc: 'Legging sport haute performance en tissu compressif 4 voies. Poche latérale zippée, ceinture large maintien. Anti-transpirant.',
  },
  {
    id: 8, name: 'Chemise Oxford Slim', brand: 'H&M', cat: 'Homme',
    price: 29.99, oldPrice: 49.99, badge: null, rating: 4.4, reviews: 98,
    colors: [
      { hex:'#fff',    name:'Blanc',         images:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80','https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80','https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80'] },
      { hex:'#1a56db', name:'Bleu oxford',   images:['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80','https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80','https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&q=80'] },
      { hex:'#7c3aed', name:'Violet',        images:['https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80','https://images.unsplash.com/photo-1563630423918-b58bef3c5e07?w=800&q=80','https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&q=80'] },
    ],
    sizes: ['S','M','L','XL'],
    desc: 'Chemise Oxford coupe slim en coton tissé. Col boutonné, poignets ajustés. Parfaite pour le travail ou le casual chic.',
  },
  {
    id: 9, name: 'Robe de Soirée', brand: 'Zara', cat: 'Femme',
    price: 79.99, oldPrice: 129.99, badge: 'promo', rating: 4.8, reviews: 203,
    colors: [
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80'] },
      { hex:'#e8272b', name:'Rouge passion', images:['https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80','https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80','https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80'] },
      { hex:'#7c3aed', name:'Violet prune',  images:['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80'] },
    ],
    sizes: ['XS','S','M','L'],
    desc: 'Robe longue de soirée en satin recyclé. Décolleté en V, dos nu, fente latérale. Doublée, fermeture éclaire invisible.',
  },
  {
    id: 10, name: 'Short de Bain', brand: 'Adidas', cat: 'Sport',
    price: 24.99, oldPrice: 39.99, badge: null, rating: 4.2, reviews: 67,
    colors: [
      { hex:'#1a56db', name:'Bleu navy',     images:['https://images.unsplash.com/photo-1519235624215-85175d5eb36e?w=800&q=80','https://images.unsplash.com/photo-1520379904750-b9f5f3dee5e9?w=800&q=80','https://images.unsplash.com/photo-1501625651904-7c71e7f8e6a8?w=800&q=80'] },
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1565378013936-93a94bc6c76e?w=800&q=80','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80','https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80'] },
      { hex:'#10b981', name:'Vert aqua',     images:['https://images.unsplash.com/photo-1617195737496-bc30194e3a19?w=800&q=80','https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'] },
    ],
    sizes: ['S','M','L','XL'],
    desc: 'Short de bain séchage rapide en polyester recyclé. Cordon de serrage, poche filet. Protection UPF 50+.',
  },
  {
    id: 11, name: 'Pull Oversize Laine', brand: 'H&M', cat: 'Femme',
    price: 44.99, oldPrice: 69.99, badge: 'new', rating: 4.6, reviews: 145,
    colors: [
      { hex:'#f5a623', name:'Moutarde',      images:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'] },
      { hex:'#6b7280', name:'Gris chiné',    images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80'] },
      { hex:'#92400e', name:'Camel',         images:['https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80','https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80'] },
    ],
    sizes: ['XS','S','M','L','XL'],
    desc: 'Pull oversize en mélange laine mérinos et alpaga. Encolure ronde, manches longues, côtes sur les poignets et l\'ourlet.',
  },

  // === FEMME (ids 13-23) ===
  { id:13, name:'Blazer Croisé Femme', brand:'Zara', cat:'Femme', price:59.99, oldPrice:89.99, badge:'promo', rating:4.7, reviews:178,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80','https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80','https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80']},{hex:'#f5f0e8',name:'Beige',images:['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80','https://images.unsplash.com/photo-1555069519-127aadedf1ee?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Blazer croisé coupe moderne, revers crantés, boutons dorés. Tissu structuré non froissant.' },
  { id:14, name:'Top Brassière Côtelé', brand:'H&M', cat:'Femme', price:14.99, oldPrice:22.99, badge:'new', rating:4.4, reviews:312,
    colors:[{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80','https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80','https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Top brassière en maille côtelée stretch, bretelles fines réglables, coupe courte.' },
  { id:15, name:'Jean Taille Haute Femme', brand:"Levi's", cat:'Femme', price:69.99, oldPrice:99.99, badge:'promo', rating:4.8, reviews:445,
    colors:[{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80','https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80','https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80','https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80']}],
    sizes:['24','26','28','30','32'], desc:'Jean 501 taille haute en denim rigid. Coupe droite iconique, 5 poches.' },
  { id:16, name:'Manteau Laine Femme', brand:'H&M', cat:'Femme', price:89.99, oldPrice:139.99, badge:'promo', rating:4.6, reviews:203,
    colors:[{hex:'#92400e',name:'Camel',images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Manteau long en laine mélangée, coupe droite. Double boutonnage, col tailleur, doublure satinée.' },
  { id:17, name:'Robe Chemise Rayée', brand:'Zara', cat:'Femme', price:39.99, oldPrice:59.99, badge:'new', rating:4.5, reviews:167,
    colors:[{hex:'#1a56db',name:'Bleu/Blanc',images:['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80','https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Robe chemise longue en popeline rayée. Col classique, boutonnage devant, ceinture incluse.' },
  { id:18, name:'Combinaison Pantalon', brand:'Zara', cat:'Femme', price:49.99, oldPrice:74.99, badge:'promo', rating:4.4, reviews:134,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80']},{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1590056630568-57285d11e2e1?w=800&q=80','https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80','https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Combinaison pantalon wide-leg en crêpe, bretelles ajustables, fermeture invisible dos.' },
  { id:19, name:'Cardigan Boutonné', brand:'H&M', cat:'Femme', price:29.99, oldPrice:44.99, badge:null, rating:4.3, reviews:89,
    colors:[{hex:'#f5a623',name:'Moutarde',images:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Cardigan long en tricot doux, boutonnage simple, poches latérales.' },
  { id:20, name:'Mini Jupe Plissée', brand:'Zara', cat:'Femme', price:24.99, oldPrice:39.99, badge:'promo', rating:4.5, reviews:256,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=800&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80','https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80','https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Mini jupe plissée en satin, taille élastiquée, tombée légère et fluide.' },
  { id:21, name:'Blouse Imprimée Fleurs', brand:'H&M', cat:'Femme', price:22.99, oldPrice:32.99, badge:'new', rating:4.2, reviews:145,
    colors:[{hex:'#1a56db',name:'Bleu floral',images:['https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80','https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Blouse légère imprimée fleurs, col lavallière, manches ballon.' },
  { id:22, name:'Short Taille Haute', brand:'Zara', cat:'Femme', price:19.99, oldPrice:29.99, badge:'promo', rating:4.4, reviews:198,
    colors:[{hex:'#1a56db',name:'Denim',images:['https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80','https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80','https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80']},{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80','https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Short taille haute en denim stretch, ourlet franges, poches avant.' },
  { id:23, name:'Veste Matelassée Femme', brand:'H&M', cat:'Femme', price:54.99, oldPrice:79.99, badge:'promo', rating:4.6, reviews:167,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']},{hex:'#1a56db',name:'Marine',images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Veste matelassée sans manches, rembourrage 100g, fermeture éclair, poches zippées.' },

  // === HOMME (ids 101-112) ===
  { id:101, name:'Sweat à Capuche', brand:'Nike', cat:'Homme', price:49.99, oldPrice:69.99, badge:'promo', rating:4.7, reviews:389,
    colors:[{hex:'#6b7280',name:'Gris chiné',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80','https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80']}],
    sizes:['S','M','L','XL','XXL'], desc:'Sweat à capuche coton molletonné, poche kangourou, cordon de serrage.' },
  { id:102, name:'Polo Piqué Homme', brand:'H&M', cat:'Homme', price:22.99, oldPrice:34.99, badge:'new', rating:4.3, reviews:234,
    colors:[{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80','https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80']},{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80','https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80','https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Polo piqué coton bio, col 3 boutons, coupe regular fit.' },
  { id:103, name:'Pantalon Chino Slim', brand:'Zara', cat:'Homme', price:39.99, oldPrice:59.99, badge:'promo', rating:4.5, reviews:312,
    colors:[{hex:'#92400e',name:'Kaki',images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80','https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80','https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80','https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80']}],
    sizes:['28','30','32','34','36'], desc:'Pantalon chino slim en coton stretch, taille mi-haute, poches obliques.' },
  { id:104, name:'Veste en Jean Homme', brand:"Levi's", cat:'Homme', price:79.99, oldPrice:109.99, badge:'promo', rating:4.6, reviews:178,
    colors:[{hex:'#1a56db',name:'Denim',images:['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80','https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80','https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Veste Trucker en denim 100% coton, coupe droite, poches plaquées.' },
  { id:105, name:'Pull Col Roulé Laine', brand:'H&M', cat:'Homme', price:44.99, oldPrice:64.99, badge:'new', rating:4.4, reviews:145,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:['S','M','L','XL','XXL'], desc:'Pull col roulé en laine mérinos douce, coupe regular, finitions côtes.' },
  { id:106, name:'Bermuda Cargo', brand:'Adidas', cat:'Homme', price:34.99, oldPrice:49.99, badge:'promo', rating:4.3, reviews:234,
    colors:[{hex:'#92400e',name:'Kaki',images:['https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80','https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80','https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80','https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80']}],
    sizes:['S','M','L','XL','XXL'], desc:'Bermuda cargo en coton ripstop, 6 poches, taille élastiquée cordon.' },
  { id:107, name:'Manteau Laine Homme', brand:'Zara', cat:'Homme', price:99.99, oldPrice:149.99, badge:'promo', rating:4.7, reviews:112,
    colors:[{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Manteau overcoat en laine, col tailleur, simple boutonnage, doublure.' },
  { id:108, name:'Jogging Tech Homme', brand:'Nike', cat:'Homme', price:54.99, oldPrice:79.99, badge:'new', rating:4.6, reviews:298,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80','https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:['S','M','L','XL','XXL'], desc:'Pantalon de jogging Dri-FIT, chevilles resserrées, poches zippées.' },
  { id:109, name:'Chemise Lin Homme', brand:'H&M', cat:'Homme', price:29.99, oldPrice:44.99, badge:'promo', rating:4.5, reviews:189,
    colors:[{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80','https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80','https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80']},{hex:'#1a56db',name:'Bleu ciel',images:['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80','https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80','https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Chemise lin coupe regular, col cubain, manches retroussables.' },
  { id:110, name:'T-Shirt Graphique', brand:'H&M', cat:'Homme', price:15.99, oldPrice:24.99, badge:'promo', rating:4.2, reviews:423,
    colors:[{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80','https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80','https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80']}],
    sizes:['XS','S','M','L','XL','XXL'], desc:'T-shirt coton jersey imprimé graphique, col rond, coupe regular.' },
  { id:111, name:'Parka Homme', brand:'Zara', cat:'Homme', price:89.99, oldPrice:129.99, badge:'promo', rating:4.6, reviews:156,
    colors:[{hex:'#92400e',name:'Kaki',images:['https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80','https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80','https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Parka longue imperméable, capuche amovible fourrure synthétique, poches multiples.' },
  { id:112, name:'Short Jogging', brand:'Adidas', cat:'Homme', price:24.99, oldPrice:39.99, badge:'new', rating:4.4, reviews:267,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80','https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80']},{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80','https://images.unsplash.com/photo-1587552280793-230e5571e4e3?w=800&q=80']}],
    sizes:['S','M','L','XL','XXL'], desc:'Short jogging 3 bandes, tissu mesh respirant, poches latérales, cordon.' },

  // === ENFANT (ids 201-215) ===
  { id:201, name:'T-Shirt Dinosaure Enfant', brand:'H&M', cat:'Enfant', price:8.99, oldPrice:14.99, badge:'promo', rating:4.6, reviews:234,
    colors:[{hex:'#10b981',name:'Vert',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80']}],
    sizes:['3-4ans','5-6ans','7-8ans','9-10ans'], desc:'T-shirt imprimé dinosaure rigolo en coton doux certifie.' },
  { id:202, name:'Jean Slim Enfant', brand:"Levi's", cat:'Enfant', price:24.99, oldPrice:39.99, badge:'promo', rating:4.7, reviews:178,
    colors:[{hex:'#1a56db',name:'Denim',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']}],
    sizes:['4ans','6ans','8ans','10ans','12ans'], desc:'Jean slim denim stretch avec ceinture ajustable.' },
  { id:203, name:'Robe Pois Fille', brand:'Zara', cat:'Enfant', price:19.99, oldPrice:29.99, badge:'new', rating:4.5, reviews:145,
    colors:[{hex:'#e8272b',name:'Rouge pois',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80']}],
    sizes:['3-4ans','5-6ans','7-8ans','9-10ans'], desc:'Robe legere a pois en coton, col Claudine, jupe evasee.' },
  { id:204, name:'Sweat Capuche Enfant', brand:'H&M', cat:'Enfant', price:18.99, oldPrice:27.99, badge:'promo', rating:4.4, reviews:189,
    colors:[{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans'], desc:'Sweat a capuche poche kangourou, tissu chaud et doux.' },
  { id:205, name:'Ensemble Jogging Enfant', brand:'Nike', cat:'Enfant', price:34.99, oldPrice:52.99, badge:'new', rating:4.6, reviews:112,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans'], desc:'Ensemble veste + pantalon jogging technique respirant.' },
  { id:206, name:'Short Bermuda Enfant', brand:'H&M', cat:'Enfant', price:12.99, oldPrice:19.99, badge:'promo', rating:4.3, reviews:167,
    colors:[{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#92400e',name:'Kaki',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans'], desc:'Bermuda coton taille elastiquee, poches laterales.' },
  { id:207, name:'Manteau Enfant', brand:'Zara', cat:'Enfant', price:44.99, oldPrice:64.99, badge:'promo', rating:4.7, reviews:98,
    colors:[{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#1a56db',name:'Marine',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans'], desc:'Manteau chaud capuche rembourrage synthetique.' },
  { id:208, name:'Pyjama Astronaute', brand:'H&M', cat:'Enfant', price:16.99, oldPrice:24.99, badge:'new', rating:4.8, reviews:312,
    colors:[{hex:'#1a56db',name:'Bleu espace',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80']}],
    sizes:['3-4ans','5-6ans','7-8ans','9-10ans'], desc:'Pyjama 2 pieces imprime astronaute, coton doux certifie.' },
  { id:209, name:'Baskets Enfant', brand:'Nike', cat:'Enfant', price:39.99, oldPrice:59.99, badge:'promo', rating:4.6, reviews:234,
    colors:[{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80','https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80','https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80']}],
    sizes:['28','29','30','31','32','33','34'], desc:'Baskets legeres respirantes, semelle flexible, scratch.' },
  { id:210, name:'Gilet Sans Manches', brand:'H&M', cat:'Enfant', price:19.99, oldPrice:29.99, badge:null, rating:4.4, reviews:89,
    colors:[{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans'], desc:'Gilet matelasse ultra-leger, parfait mi-saison.' },
  { id:211, name:'Robe Tutu Fille', brand:'Zara', cat:'Enfant', price:22.99, oldPrice:34.99, badge:'new', rating:4.7, reviews:145,
    colors:[{hex:'#e8272b',name:'Rose',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80']}],
    sizes:['3-4ans','5-6ans','7-8ans','9-10ans'], desc:'Robe tutu tulle multicouche, bodice pailletes, pour les fetes.' },
  { id:212, name:'Veste Jean Enfant', brand:"Levi's", cat:'Enfant', price:39.99, oldPrice:54.99, badge:null, rating:4.6, reviews:123,
    colors:[{hex:'#1a56db',name:'Denim',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans'], desc:'Veste denim classique col tailleur, poches plaquees.' },
  { id:213, name:'Legging Etoiles', brand:'H&M', cat:'Enfant', price:9.99, oldPrice:14.99, badge:'promo', rating:4.5, reviews:198,
    colors:[{hex:'#1a56db',name:'Marine',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80']}],
    sizes:['3-4ans','5-6ans','7-8ans','9-10ans'], desc:'Legging coton stretch imprime etoiles, ceinture elastique.' },
  { id:214, name:'Chemise Carreaux', brand:'Zara', cat:'Enfant', price:17.99, oldPrice:24.99, badge:'new', rating:4.4, reviews:67,
    colors:[{hex:'#e8272b',name:'Rouge/blanc',images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']},{hex:'#1a56db',name:'Bleu/blanc',images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80']}],
    sizes:['4-5ans','6-7ans','8-9ans','10-11ans','12-13ans'], desc:'Chemise carreaux flanelle, col boutonne.' },
  { id:215, name:'Salopette Jean Fille', brand:"Levi's", cat:'Enfant', price:34.99, oldPrice:49.99, badge:'promo', rating:4.7, reviews:156,
    colors:[{hex:'#1a56db',name:'Denim',images:['https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80','https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80']}],
    sizes:['3-4ans','5-6ans','7-8ans','9-10ans'], desc:'Salopette denim bretelles ajustables, poches frontales.' },

  // === SPORT (ids 301-312) ===
  { id:301, name:'Veste Running', brand:'Nike', cat:'Sport', price:69.99, oldPrice:99.99, badge:'promo', rating:4.7, reviews:234,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80','https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80','https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80','https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Veste running coupe-vent legere, 2 poches zippees, capuche packable.' },
  { id:302, name:'Brassiere Sport', brand:'Adidas', cat:'Sport', price:29.99, oldPrice:44.99, badge:'new', rating:4.5, reviews:345,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80','https://images.unsplash.com/photo-1571945192201-2bc4d8a6f527?w=800&q=80','https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80','https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80','https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Brassiere maintien moyen, bretelles reglables, dos nageur.' },
  { id:303, name:'Short Trail', brand:'Adidas', cat:'Sport', price:34.99, oldPrice:49.99, badge:'promo', rating:4.6, reviews:178,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80','https://images.unsplash.com/photo-1571945192201-2bc4d8a6f527?w=800&q=80','https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80']},{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80','https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Short trail 2 en 1, poche ceinture, coutures plates anti-frottements.' },
  { id:304, name:'Maillot de Bain', brand:'Adidas', cat:'Sport', price:39.99, oldPrice:59.99, badge:'new', rating:4.4, reviews:112,
    colors:[{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1519235624215-85175d5eb36e?w=800&q=80','https://images.unsplash.com/photo-1520379904750-b9f5f3dee5e9?w=800&q=80','https://images.unsplash.com/photo-1501625651904-7c71e7f8e6a8?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1565378013936-93a94bc6c76e?w=800&q=80','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80','https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Maillot 1 piece chlore-resistant, maintien renforce, UPF 50+.' },
  { id:305, name:'T-Shirt Compression', brand:'Nike', cat:'Sport', price:34.99, oldPrice:49.99, badge:'promo', rating:4.6, reviews:289,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80','https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80']},{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80','https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80']}],
    sizes:['XS','S','M','L','XL','XXL'], desc:'T-shirt compression Dri-FIT, evacuation humidite, coupes ergonomiques.' },
  { id:306, name:'Veste Polaire', brand:'Adidas', cat:'Sport', price:44.99, oldPrice:64.99, badge:'new', rating:4.5, reviews:167,
    colors:[{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Veste polaire 200g, col montant, 2 poches zippees.' },
  { id:307, name:'Pantalon Jogging Tech', brand:'Nike', cat:'Sport', price:54.99, oldPrice:79.99, badge:'promo', rating:4.7, reviews:312,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80','https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:['XS','S','M','L','XL','XXL'], desc:'Pantalon tech-fleece, coupe fuselee, chevilles resserrees.' },
  { id:308, name:'Sac de Sport', brand:'Adidas', cat:'Sport', price:34.99, oldPrice:49.99, badge:'new', rating:4.5, reviews:156,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80']},{hex:'#1a56db',name:'Bleu',images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80']}],
    sizes:[], desc:'Sac de sport 30L, compartiment chaussures, poche accessoires.' },
  { id:309, name:'Genouillere Compression', brand:'Adidas', cat:'Sport', price:22.99, oldPrice:34.99, badge:null, rating:4.6, reviews:98,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80','https://images.unsplash.com/photo-1571945192201-2bc4d8a6f527?w=800&q=80','https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Genouillere compression 360 degres, tissu respirant, soutien optimal.' },
  { id:310, name:'Tapis de Yoga', brand:'Adidas', cat:'Sport', price:29.99, oldPrice:44.99, badge:'promo', rating:4.4, reviews:234,
    colors:[{hex:'#7c3aed',name:'Violet',images:['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80','https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80','https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80','https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80','https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80']}],
    sizes:[], desc:'Tapis yoga antiderapant 6mm, sangles de transport, surface texturee.' },
  { id:311, name:'Bonnet Beanie Sport', brand:'Nike', cat:'Sport', price:19.99, oldPrice:29.99, badge:'new', rating:4.3, reviews:145,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:['unique'], desc:'Bonnet Dri-FIT stretch, coupe ajustee, logo brode.' },
  { id:312, name:'Gants de Sport', brand:'Adidas', cat:'Sport', price:24.99, oldPrice:34.99, badge:'promo', rating:4.5, reviews:189,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80','https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Gants running grip, compatibles ecran tactile, reflechissants.' },

  // === ACCESSOIRES (ids 401-413) ===
  { id:401, name:'Sac a Dos Urban', brand:'H&M', cat:'Accessoires', price:39.99, oldPrice:59.99, badge:'promo', rating:4.6, reviews:234,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80']}],
    sizes:[], desc:'Sac a dos 20L, compartiment laptop 15 pouces, USB charge.' },
  { id:402, name:'Ceinture Cuir', brand:'Zara', cat:'Accessoires', price:24.99, oldPrice:34.99, badge:'new', rating:4.5, reviews:145,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80']},{hex:'#92400e',name:'Marron',images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Ceinture cuir veritable, boucle metal doree, tige de reglage.' },
  { id:403, name:'Lunettes de Soleil', brand:'Zara', cat:'Accessoires', price:29.99, oldPrice:44.99, badge:'promo', rating:4.4, reviews:312,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80','https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80']},{hex:'#92400e',name:'Ecaille',images:['https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80','https://images.unsplash.com/photo-1520716781498-7ee6011df08b?w=800&q=80','https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80']}],
    sizes:[], desc:'Lunettes UV400, monture acetate, verres polarises.' },
  { id:404, name:'Echarpe Cachemire', brand:'H&M', cat:'Accessoires', price:34.99, oldPrice:54.99, badge:'promo', rating:4.7, reviews:189,
    colors:[{hex:'#92400e',name:'Camel',images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:[], desc:'Echarpe cachemire pure, 200x70cm, douceur incomparable.' },
  { id:405, name:'Montre Analogique', brand:'Zara', cat:'Accessoires', price:59.99, oldPrice:89.99, badge:'new', rating:4.6, reviews:156,
    colors:[{hex:'#92400e',name:'Marron/Or',images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80','https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80']},{hex:'#000',name:'Noir/Argent',images:['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80','https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80']}],
    sizes:[], desc:'Montre analogique bracelet cuir, cadran 40mm, mouvement quartz.' },
  { id:406, name:'Chapeau Bob Coton', brand:'H&M', cat:'Accessoires', price:14.99, oldPrice:21.99, badge:'new', rating:4.3, reviews:98,
    colors:[{hex:'#f5f0e8',name:'Beige',images:['https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80','https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80','https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80','https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80','https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80']}],
    sizes:['S/M','L/XL'], desc:'Bob coton 100%, bord retournable, tour de tete ajustable.' },
  { id:407, name:'Pochette Soiree', brand:'Zara', cat:'Accessoires', price:29.99, oldPrice:44.99, badge:'promo', rating:4.5, reviews:167,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80']},{hex:'#f5a623',name:'Doree',images:['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80']}],
    sizes:[], desc:'Pochette soiree satin, fermeture clip metal, chainette amovible.' },
  { id:408, name:'Gants Cuir', brand:'Zara', cat:'Accessoires', price:39.99, oldPrice:59.99, badge:'promo', rating:4.6, reviews:112,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80']},{hex:'#92400e',name:'Marron',images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80']}],
    sizes:['S','M','L'], desc:'Gants cuir double jersey, compatibles tactile.' },
  { id:409, name:'Collier Dore', brand:'H&M', cat:'Accessoires', price:12.99, oldPrice:19.99, badge:'new', rating:4.4, reviews:245,
    colors:[{hex:'#f5a623',name:'Dore',images:['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80','https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80','https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&q=80']},{hex:'#fff',name:'Argente',images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80','https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80','https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&q=80']}],
    sizes:[], desc:'Collier chaine fine plaquer or ou argent, longueur ajustable.' },
  { id:410, name:'Sac Banane', brand:'H&M', cat:'Accessoires', price:17.99, oldPrice:26.99, badge:'promo', rating:4.2, reviews:178,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80']},{hex:'#92400e',name:'Camel',images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80']}],
    sizes:[], desc:'Sac banane polyester, compartiments zippees, sangle reglable.' },
  { id:411, name:'Boucles Anneaux', brand:'Zara', cat:'Accessoires', price:9.99, oldPrice:14.99, badge:'promo', rating:4.5, reviews:312,
    colors:[{hex:'#f5a623',name:'Dorees',images:['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80','https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80','https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&q=80']},{hex:'#fff',name:'Argentees',images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80','https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80','https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&q=80']}],
    sizes:[], desc:'Boucles anneaux acier inoxydable, hypoallergeniques.' },
  { id:412, name:'Chapeau Fedora', brand:'Zara', cat:'Accessoires', price:24.99, oldPrice:34.99, badge:'new', rating:4.3, reviews:89,
    colors:[{hex:'#92400e',name:'Camel',images:['https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80','https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80','https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80','https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80','https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80']}],
    sizes:['S/M','L/XL'], desc:'Fedora laine feutree, ruban contrastant, bord rabattable.' },
  { id:413, name:'Bonnet Pompon', brand:'H&M', cat:'Accessoires', price:12.99, oldPrice:19.99, badge:'promo', rating:4.5, reviews:198,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80','https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80','https://images.unsplash.com/photo-1548712023-8c7e6e9c7c54?w=800&q=80']}],
    sizes:['unique'], desc:'Bonnet tricot pompon en acrylique doux, motifs jacquard.' },

  // === FEMME extra (ids 24-27) ===
  { id:24, name:'Robe Pull Hiver', brand:'H&M', cat:'Femme', price:34.99, oldPrice:54.99, badge:'promo', rating:4.5, reviews:167,
    colors:[{hex:'#7c3aed',name:'Violet',images:['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80']},{hex:'#6b7280',name:'Gris',images:['https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80','https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Robe pull longue en maille douce, col rond, manches longues, ceinture incluse.' },
  { id:25, name:'Trench Coat Femme', brand:'Zara', cat:'Femme', price:79.99, oldPrice:119.99, badge:'promo', rating:4.7, reviews:203,
    colors:[{hex:'#92400e',name:'Camel',images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Trench classique double boutonnage, ceinture, col revers.' },
  { id:26, name:'Top Satin Femme', brand:'Zara', cat:'Femme', price:19.99, oldPrice:29.99, badge:'new', rating:4.4, reviews:189,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=800&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80','https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80']}],
    sizes:['XS','S','M','L'], desc:'Top en satin fluide, col V, bretelles fines, coupe crop.' },
  { id:27, name:'Legging Cuir Femme', brand:'Zara', cat:'Femme', price:29.99, oldPrice:44.99, badge:'promo', rating:4.3, reviews:134,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=800&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80']}],
    sizes:['XS','S','M','L','XL'], desc:'Legging effet cuir taille haute, stretch, poches laterales.' },

  // === HOMME extra (ids 113-115) ===
  { id:113, name:'Veste Bomber Homme', brand:'H&M', cat:'Homme', price:59.99, oldPrice:89.99, badge:'promo', rating:4.5, reviews:167,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']},{hex:'#92400e',name:'Kaki',images:['https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80','https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80','https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Bomber satin college, bandes contrastantes, col rond cote.' },
  { id:114, name:'Gilet Matelasse Homme', brand:'H&M', cat:'Homme', price:44.99, oldPrice:64.99, badge:'new', rating:4.4, reviews:112,
    colors:[{hex:'#1a56db',name:'Marine',images:['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=80','https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4b4087?w=800&q=80']}],
    sizes:['S','M','L','XL','XXL'], desc:'Gilet sans manches rembourre leger, col montant, 2 poches.' },
  { id:115, name:'Surchemise Flanelle', brand:"Levi's", cat:'Homme', price:49.99, oldPrice:74.99, badge:'promo', rating:4.6, reviews:189,
    colors:[{hex:'#e8272b',name:'Rouge carreaux',images:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80','https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80','https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80']},{hex:'#1a56db',name:'Bleu carreaux',images:['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80','https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80','https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&q=80']}],
    sizes:['S','M','L','XL'], desc:'Surchemise flanelle carreaux, coupe oversize, doublure.' },

  // === SPORT extra (ids 313-315) ===
  { id:313, name:'Chaussettes Running x3', brand:'Nike', cat:'Sport', price:14.99, oldPrice:22.99, badge:'promo', rating:4.5, reviews:312,
    colors:[{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&q=80','https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80','https://images.unsplash.com/photo-1570507772800-0cff2f9b8daf?w=800&q=80']},{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1610810984830-21f8c9bdf2e9?w=800&q=80','https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&q=80','https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80']}],
    sizes:['38-42','43-46'], desc:'Pack x3 chaussettes running Dri-FIT, amorti plante de pied.' },
  { id:314, name:'Casquette Sport', brand:'Nike', cat:'Sport', price:22.99, oldPrice:32.99, badge:'new', rating:4.3, reviews:189,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80','https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80','https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80']},{hex:'#fff',name:'Blanc',images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80','https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80','https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80']}],
    sizes:['unique'], desc:'Casquette Dri-FIT trucker, aeration mesh, fermeture velcro.' },
  { id:315, name:'Gourde Sport 750ml', brand:'Adidas', cat:'Sport', price:19.99, oldPrice:29.99, badge:'promo', rating:4.6, reviews:267,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80','https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80']},{hex:'#e8272b',name:'Rouge',images:['https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80','https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80','https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80']}],
    sizes:[], desc:'Gourde inox 750ml, bec verseur, isolation double paroi 12h.' },

  // === ACCESSOIRES extra (ids 414-415) ===
  { id:414, name:'Porte-Monnaie Cuir', brand:'Zara', cat:'Accessoires', price:22.99, oldPrice:34.99, badge:'promo', rating:4.4, reviews:145,
    colors:[{hex:'#000',name:'Noir',images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80']},{hex:'#92400e',name:'Marron',images:['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80','https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80']}],
    sizes:[], desc:'Porte-monnaie cuir graine, 8 emplacements cartes, fermeture zip.' },
  { id:415, name:'Bracelet Jonc Dore', brand:'H&M', cat:'Accessoires', price:9.99, oldPrice:14.99, badge:'new', rating:4.5, reviews:234,
    colors:[{hex:'#f5a623',name:'Dore',images:['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80','https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80','https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&q=80']},{hex:'#fff',name:'Argente',images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80','https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80','https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&q=80']}],
    sizes:[], desc:'Bracelet jonc rigide acier inox 18K, ouverture ressort.' },
  {
    id: 12, name: 'Chaussettes Pack x5', brand: "Levi's", cat: 'Accessoires',
    price: 14.99, oldPrice: null, badge: null, rating: 4.1, reviews: 290,
    colors: [
      { hex:'#000',    name:'Noir',          images:['https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&q=80','https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80','https://images.unsplash.com/photo-1570507772800-0cff2f9b8daf?w=800&q=80'] },
      { hex:'#fff',    name:'Blanc',         images:['https://images.unsplash.com/photo-1610810984830-21f8c9bdf2e9?w=800&q=80','https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&q=80','https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80'] },
      { hex:'#6b7280', name:'Gris',          images:['https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80','https://images.unsplash.com/photo-1570507772800-0cff2f9b8daf?w=800&q=80','https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&q=80'] },
    ],
    sizes: ['38-40','41-43','44-46'],
    desc: 'Pack de 5 paires de chaussettes en coton peigné. Renforcées au talon et à la pointe. Bandes élastiques non-compressives.',
  }
];

// ========================================================
// ===== COMMENTAIRES (stockage localStorage pour la démo)
// Équivalent SQL fourni ci-dessous
// ========================================================
let reviewsDB = {};
let currentRating = 0;
let currentProduct = null;
let currentQty = 1;
let currentSlide = 0;
let filteredProducts = [...products];
let cart = [];

// Couleurs d'avatar générées depuis le prénom
const avatarColors = ['#e8272b','#f5a623','#10b981','#1a56db','#7c3aed','#ec4899','#0d9488','#d97706'];
function avatarColor(name) { let h = 0; for(let c of name) h = (h+c.charCodeAt(0)*31)%avatarColors.length; return avatarColors[h]; }
function avatarInitials(name) { return name.trim().split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase(); }

// Données de démo pré-chargées — un pool d'avis par produit, cohérents avec la note et l'article
const SEED_REVIEWS = {
  1: [ // Robe Midi Fleurie
    { id:'r1_1', name:'Marie L.',   rating:5, title:'Absolument magnifique !',       body:'La robe est exactement comme sur les photos, la coupe est parfaite. Tissu léger et agréable, je la recommande vivement !',                               date:'2025-02-14', helpful:12 },
    { id:'r1_2', name:'Sophie M.',  rating:4, title:'Jolie mais taille grande',       body:'Belle robe, tissu de qualité. Conseil : prendre une taille en dessous car la coupe est assez large. La longueur est parfaite pour 1m65.',                 date:'2025-01-28', helpful:8  },
    { id:'r1_3', name:'Camille D.', rating:5, title:'Coup de cœur !',                body:'Je cherchais une robe pour un mariage et elle est parfaite. Élégante sans être trop habillée. Les couleurs sont fidèles. Livraison super rapide.',         date:'2025-03-01', helpful:5  },
    { id:'r1_4', name:'Lucie B.',   rating:5, title:'Superbe qualité pour le prix',  body:'Tissu doux et bien tombant. J\'ai reçu plein de compliments. Le imprimé floral est vraiment joli, pas criard du tout.',                                    date:'2025-01-10', helpful:9  },
    { id:'r1_5', name:'Emma R.',    rating:4, title:'Très belle robe',               body:'Vraiment jolie, exactement comme la photo. Je mettrais 5 étoiles mais la fermeture éclair est un peu délicate à manipuler seule.',                         date:'2025-02-22', helpful:4  },
  ],
  2: [ // Jean Slim Premium
    { id:'r2_1', name:'Thomas R.',  rating:4, title:'Bon jean, bonne qualité',        body:'Jean bien coupé, le stretch est un vrai plus. Légèrement plus serré aux cuisses que le classique slim. Sinon la qualité est au rendez-vous.',              date:'2025-02-08', helpful:6  },
    { id:'r2_2', name:'Marc D.',    rating:5, title:'Parfait !',                      body:'Super jean, coupe impeccable. Je l\'ai pris en 32 pour un tour de taille de 82cm et c\'est parfait. La couleur est fidèle à la photo.',                    date:'2025-01-20', helpful:11 },
    { id:'r2_3', name:'Antoine P.', rating:4, title:'Bon rapport qualité/prix',       body:'Très bon jean pour le prix. Le denim est solide, pas transparent. Juste un peu rigide au début mais ça s\'assouplit vite.',                                date:'2025-03-05', helpful:3  },
    { id:'r2_4', name:'Kevin L.',   rating:5, title:'Ma nouvelle paire préférée',    body:'Je possède plusieurs jeans Levi\'s et celui-ci est le meilleur de ma collection. Coupe slim sans être trop serrée.',                                       date:'2025-02-16', helpful:8  },
  ],
  3: [ // Veste en Lin Beige
    { id:'r3_1', name:'Isabelle M.', rating:5, title:'Très belle veste légère',      body:'Parfaite pour la mi-saison. Le lin est de qualité, pas de froissement excessif. J\'adore les boutons dorés qui donnent un côté chic.',                    date:'2025-02-18', helpful:7  },
    { id:'r3_2', name:'Nathalie C.', rating:4, title:'Chouette mais se froisse',     body:'Belle veste, coupe moderne. Seul bémol : se froisse facilement comme tout le lin. Prévoyez un coup de fer avant de sortir.',                              date:'2025-01-30', helpful:5  },
    { id:'r3_3', name:'Julie T.',    rating:5, title:'J\'adore !',                   body:'Superbe veste oversize, idéale sur une robe ou un jean slim. La couleur beige va avec tout. Je la recommande les yeux fermés.',                            date:'2025-03-02', helpful:6  },
  ],
  4: [ // Sneakers Running Air
    { id:'r4_1', name:'Alex T.',    rating:5, title:'Les meilleures sneakers que j\'ai !', body:'Confort incroyable dès la première utilisation. J\'ai fait 10km avec et aucune douleur. Pointure fidèle, prendre sa taille habituelle.',             date:'2025-02-20', helpful:19 },
    { id:'r4_2', name:'Lucas B.',   rating:5, title:'Top qualité, top prix',          body:'Pour ce prix c\'est vraiment excellent. Légères, respirantes, super look. Je les porte aussi bien pour courir que pour sortir en ville.',                 date:'2025-01-15', helpful:14 },
    { id:'r4_3', name:'Julien M.',  rating:5, title:'Amorti exceptionnel',            body:'Le meilleur amorti que j\'ai testé sur une paire de cette gamme de prix. Mes genoux me remercient après les longues sorties.',                            date:'2025-02-05', helpful:22 },
    { id:'r4_4', name:'Romain D.',  rating:5, title:'Incontournable',                body:'J\'en suis à ma 3ème paire. Elles durent longtemps et gardent leur forme. Le look est au top aussi bien en sport qu\'en casual.',                         date:'2025-01-08', helpful:17 },
    { id:'r4_5', name:'Pierre L.',  rating:4, title:'Très bonnes mais semelle glisse un peu', body:'Excellent amorti et très légères. Petit bémol : sur sol mouillé la semelle manque un peu d\'adhérence.',                                          date:'2025-03-10', helpful:9  },
  ],
  5: [ // T-Shirt Col V
    { id:'r5_1', name:'Nicolas B.', rating:4, title:'Simple et efficace',             body:'T-shirt basique de bonne qualité. Le coton est doux, pas transparent même en blanc. Se lave bien sans rétrécir.',                                        date:'2025-02-12', helpful:5  },
    { id:'r5_2', name:'Bastien C.', rating:5, title:'Excellent rapport qualité/prix', body:'Pour ce prix je ne m\'attendais pas à une si bonne qualité. Tissu agréable, col bien formé, coutures solides. J\'en ai pris 5.',                         date:'2025-01-25', helpful:10 },
    { id:'r5_3', name:'Hugo M.',    rating:4, title:'Bon t-shirt',                   body:'Bonne qualité pour le prix. Attention : taille assez grand, je prends habituellement un M et j\'aurais dû prendre un S.',                                 date:'2025-03-08', helpful:7  },
  ],
  6: [ // Sac Cabas Cuir
    { id:'r6_1', name:'Aurélie D.', rating:5, title:'Superbe sac !',                 body:'Cuir de très bonne qualité, doublure soignée. Il est grand et pratique, j\'y mets tout mon nécessaire. Les anses sont solides.',                          date:'2025-02-25', helpful:8  },
    { id:'r6_2', name:'Céline M.',  rating:4, title:'Beau sac mais lourd',           body:'Très beau sac en cuir véritable, bonne finition. Il est un peu lourd à vide mais c\'est le prix de la qualité. Livraison en 2 jours.',                   date:'2025-01-18', helpful:6  },
    { id:'r6_3', name:'Laure P.',   rating:5, title:'Parfait pour le bureau',        body:'Élégant et spacieux. Je l\'utilise tous les jours au bureau. Il tient parfaitement sur une chaise. La fermeture magnétique est très pratique.',           date:'2025-03-03', helpful:11 },
  ],
  7: [ // Legging Sport Pro
    { id:'r7_1', name:'Sarah K.',   rating:5, title:'Excellent maintien !',          body:'Ce legging est incroyable pour le sport. Le tissu compressif maintient sans serrer. La poche zippée est vraiment utile pour le téléphone.',              date:'2025-02-17', helpful:15 },
    { id:'r7_2', name:'Amélie T.',  rating:5, title:'Le meilleur legging que j\'ai', body:'Tissu opaque même en blanc, très agréable. Il garde sa forme après plusieurs lavages. Je le porte aussi bien pour le yoga que la course à pied.',        date:'2025-01-22', helpful:12 },
    { id:'r7_3', name:'Clara D.',   rating:4, title:'Très bon mais attention à la taille', body:'Legging de qualité, tissu solide et respirant. Prendre une taille au-dessus si vous êtes entre deux tailles.',                                     date:'2025-03-06', helpful:8  },
  ],
  8: [ // Chemise Oxford
    { id:'r8_1', name:'Mathieu L.', rating:4, title:'Belle chemise, bonne qualité',  body:'Chemise bien coupée, le col boutonné est stylé. Le tissu Oxford est agréable. Légèrement slim donc prendre une taille au-dessus si corpulent.',          date:'2025-02-09', helpful:5  },
    { id:'r8_2', name:'Sébastien A.',rating:5, title:'Parfaite pour le bureau',      body:'Je la porte au bureau, elle est impeccable. Bonne qualité de tissu, se repasse facilement. Coupe slim moderne sans être étouffante.',                    date:'2025-01-31', helpful:7  },
  ],
  9: [ // Robe de Soirée
    { id:'r9_1', name:'Pauline M.', rating:5, title:'Magnifique pour une soirée',    body:'J\'ai porté cette robe pour un gala et j\'ai eu plein de compliments. Elle tombe à merveille, le satin est luxueux. La fente est très élégante.',       date:'2025-02-28', helpful:16 },
    { id:'r9_2', name:'Elise D.',   rating:5, title:'Wow !',                        body:'Robe parfaite pour un mariage. La couleur noire est profonde, le tissu ne brille pas trop. Je l\'ai portée avec des escarpins et c\'était parfait.',      date:'2025-01-27', helpful:13 },
    { id:'r9_3', name:'Marine C.',  rating:4, title:'Très belle mais délicate',      body:'Très belle robe, mais le satin est fragile, attention aux bijoux qui peuvent accrocher le tissu. Sinon la coupe est vraiment flatteuse.',                date:'2025-03-04', helpful:9  },
  ],
  10: [ // Short de Bain
    { id:'rA_1', name:'Florian T.', rating:4, title:'Bon short de bain',             body:'Séchage très rapide, confortable. La ceinture tient bien. Le tissu est solide. Je l\'ai emmené en vacances et il a bien résisté à l\'usage quotidien.',  date:'2025-02-11', helpful:4  },
  ],
  11: [ // Pull Oversize Laine
    { id:'rB_1', name:'Océane D.',  rating:5, title:'Douillet et stylé !',           body:'Ce pull est incroyablement doux, la laine mérinos ne gratte pas du tout. La coupe oversize est parfaite sur un jean slim. Je l\'adore.',               date:'2025-02-19', helpful:9  },
    { id:'rB_2', name:'Manon P.',   rating:4, title:'Très beau mais délicat à laver', body:'Magnifique pull, très chaud sans être étouffant. Attention au lavage : à la main ou cycle délicat uniquement pour conserver la forme.',               date:'2025-01-26', helpful:7  },
  ],
  12: [ // Chaussettes Pack x5
    { id:'rC_1', name:'Guillaume M.',rating:4, title:'Bon rapport qualité/prix',     body:'Chaussettes solides, le talon renforcé fait la différence. Elles tiennent bien sans marque sur le mollet. Je les rachète régulièrement.',              date:'2025-02-07', helpful:6  },
    { id:'rC_2', name:'Xavier B.',  rating:4, title:'Pratique et correct',           body:'Pack pratique. Les tailles correspondent bien au tableau. Tissu agréable, elles ne font pas de boules. Pour le prix c\'est vraiment bien.',            date:'2025-01-19', helpful:4  },
  ],
};

function getSeedReviews(productId) {
  return SEED_REVIEWS[productId] || [];
}

// ===== NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  window.scrollTo(0,0);
  if(page==='cart') renderCart();
  if(page==='checkout') renderCheckout();
  if(page==='orders') showOrdersPage();
  // Activer le bon nav item
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  if(page === 'home') {
    document.querySelector('.nav-item')?.classList.add('active'); // premier = Accueil
    currentCategory = 'all';
  }
}

// ===== HERO SLIDER =====
function goSlide(n) {
  currentSlide = n;
  document.getElementById('heroSlides').style.transform = `translateX(-${n*100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('active', i===n));
}
setInterval(() => goSlide((currentSlide+1)%3), 5000);

// ===== RENDER PRODUCTS =====
function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if(!container) return;
  if(list.length === 0) {
    container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)"><p>Aucun produit trouvé pour ces critères.</p></div>';
    return;
  }
  container.innerHTML = list.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      ${p.badge ? `<div class="card-badge badge-${p.badge}">${p.badge==='promo'?'PROMO':p.badge==='new'?'NOUVEAU':'TOP VENTE'}</div>` : ''}
      <button class="card-wish" onclick="event.stopPropagation();wishToggle(this)">♡</button>
      <img class="card-img" src="${p.colors[0].images[0]}" alt="${p.name}" loading="lazy">
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))} <span>(${p.reviews})</span></div>
        <div class="card-prices">
          <div class="price-now">${p.price.toFixed(2).replace('.',',')} €</div>
          ${p.oldPrice ? `<div class="price-old">${p.oldPrice.toFixed(2).replace('.',',')} €</div><div class="price-save">-${Math.round((1-p.price/p.oldPrice)*100)}%</div>` : ''}
        </div>
      </div>
      <div class="card-footer">
        <button class="add-to-cart" onclick="event.stopPropagation();addToCart(${p.id})">Ajouter au panier</button>
      </div>
    </div>
  `).join('');
}

function initHome() {
  renderProducts(products.slice(0,8), 'homeProductsGrid');
  renderProducts(products.slice(4,12), 'homeProducts2Grid');
}

// ===== SEARCH =====
let currentCategory = 'all'; // catégorie active globale

function doSearch() {
  const q = document.getElementById('mainSearch').value.trim();
  // Quand on cherche du texte, on réinitialise le filtre catégorie
  if(q) currentCategory = 'all';
  applyAllFilters(q, currentCategory);
  showPage('search');
  updateNavActive(currentCategory);
}

function filterCategory(cat) {
  currentCategory = cat;
  // Réinitialiser la barre de recherche quand on filtre par catégorie
  document.getElementById('mainSearch').value = '';
  applyAllFilters('', cat);
  showPage('search');
  updateNavActive(cat);
}

function applyAllFilters(q, cat) {
  let result = [...products];

  // Filtre catégorie (exact)
  if(cat && cat !== 'all') {
    result = result.filter(p => p.cat === cat);
  }

  // Filtre texte
  if(q) {
    const ql = q.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(ql) ||
      p.brand.toLowerCase().includes(ql) ||
      p.cat.toLowerCase().includes(ql)
    );
  }

  filteredProducts = result;
  renderProducts(filteredProducts, 'searchProductsGrid');

  // Titre de la page résultats
  const catLabel = cat !== 'all' ? cat : 'tous';
  if(q) {
    document.getElementById('resultsCount').innerHTML =
      `<strong>${result.length} résultat${result.length>1?'s':''}</strong> pour "<em>${q}</em>"`;
  } else if(cat !== 'all') {
    document.getElementById('resultsCount').innerHTML =
      `<strong>${result.length} article${result.length>1?'s':''}</strong> dans <em>${cat}</em>`;
  } else {
    document.getElementById('resultsCount').innerHTML =
      `<strong>${result.length} articles</strong> au total`;
  }
}

// Met à jour les états actifs dans la navbar et les cat-pills
// navClick : point d'entrée unique pour tous les clics de la navbar
function navClick(target) {
  if(target === 'home') {
    currentCategory = 'all';
    updateNavActive('home');
    showPage('home');
  } else if(target === 'promo') {
    currentCategory = 'promo';
    document.getElementById('mainSearch').value = '';
    filteredProducts = products.filter(p => p.badge === 'promo');
    renderProducts(filteredProducts, 'searchProductsGrid');
    document.getElementById('resultsCount').innerHTML =
      `<strong>${filteredProducts.length} articles</strong> en promotion`;
    updateNavActive('promo');
    showPage('search');
  } else if(target === 'new') {
    currentCategory = 'new';
    document.getElementById('mainSearch').value = '';
    filteredProducts = products.filter(p => p.badge === 'new');
    renderProducts(filteredProducts, 'searchProductsGrid');
    document.getElementById('resultsCount').innerHTML =
      `<strong>${filteredProducts.length} nouveautés</strong>`;
    updateNavActive('new');
    showPage('search');
  } else {
    // Catégorie normale : Femme, Homme, Enfant, Sport, Accessoires
    filterCategory(target);
  }
}

function updateNavActive(target) {
  // Retirer active partout
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  // Activer le bon item par ID
  const map = {
    'home': 'nav-home',
    'Femme': 'nav-Femme', 'Homme': 'nav-Homme',
    'Enfant': 'nav-Enfant', 'Sport': 'nav-Sport',
    'Accessoires': 'nav-Accessoires',
    'promo': 'nav-promo', 'new': 'nav-new',
    'all': 'nav-home'
  };
  const id = map[target] || map['home'];
  const el = document.getElementById(id);
  if(el) el.classList.add('active');

  // Cat pills (bande sous le hero, page home)
  document.querySelectorAll('.cat-pill').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.cat-pill').forEach(el => {
    const txt = el.textContent.trim();
    if((target === 'home' || target === 'all') && txt === 'Tout voir') el.classList.add('active');
    else if(txt === target) el.classList.add('active');
  });
}
function applyFilters() {
  // Catégories cochées
  const catMap = {
    'f-femme':  'Femme',
    'f-homme':  'Homme',
    'f-sport':  'Sport',
    'f-access': 'Accessoires'
  };
  const checkedCats = Object.entries(catMap)
    .filter(([id]) => { const el = document.getElementById(id); return el && el.checked; })
    .map(([, cat]) => cat);

  // Marques cochées
  const brandMap = {
    'fb-hm':     "H&M",
    'fb-zara':   'Zara',
    'fb-nike':   'Nike',
    'fb-adidas': 'Adidas',
    'fb-levis':  "Levi's"
  };
  const checkedBrands = Object.entries(brandMap)
    .filter(([id]) => { const el = document.getElementById(id); return el && el.checked; })
    .map(([, brand]) => brand);

  // Tailles actives
  const activeSizes = [...document.querySelectorAll('.size-btn.active')].map(b => b.textContent.trim());

  // Prix max
  const priceMax = parseFloat(document.getElementById('priceMax').value) || 500;
  const priceMin = parseFloat(document.getElementById('priceMin').value) || 0;

  // Filtre
  let result = [...products];

  if (checkedCats.length > 0)
    result = result.filter(p => checkedCats.includes(p.cat));

  if (checkedBrands.length > 0)
    result = result.filter(p => checkedBrands.includes(p.brand));

  if (activeSizes.length > 0)
    result = result.filter(p => p.sizes && activeSizes.some(s => p.sizes.includes(s)));

  result = result.filter(p => p.price >= priceMin && p.price <= priceMax);

  filteredProducts = result;
  renderProducts(filteredProducts, 'searchProductsGrid');

  const total = filteredProducts.length;
  document.getElementById('resultsCount').innerHTML =
    `<strong>${total} article${total > 1 ? 's' : ''}</strong> trouvé${total > 1 ? 's' : ''}`;

  showPage('search');
  showToast(`${total} article${total > 1 ? 's' : ''} trouvé${total > 1 ? 's' : ''}`);
}
function resetFilters() {
  document.querySelectorAll('.filter-option input[type=checkbox]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('priceMax').value = 500;
  document.getElementById('priceMin').value = 0;
  document.getElementById('priceRange').value = 500;
  filteredProducts = [...products];
  renderProducts(filteredProducts, 'searchProductsGrid');
  document.getElementById('resultsCount').innerHTML =
    `<strong>${filteredProducts.length} articles</strong>`;
  showToast('Filtres réinitialisés');
}
function updatePriceFilter(val) {
  document.getElementById('priceMax').value = val;
  applyFilters();
}
function sortProducts(val) {
  let sorted = [...filteredProducts];
  if(val === 'price-asc') sorted.sort((a,b) => a.price - b.price);
  else if(val === 'price-desc') sorted.sort((a,b) => b.price - a.price);
  else if(val === 'rating') sorted.sort((a,b) => b.rating - a.rating);
  else if(val === 'new') sorted = sorted.filter(p => p.badge === 'new').concat(sorted.filter(p => p.badge !== 'new'));
  renderProducts(sorted, 'searchProductsGrid');
}
function toggleSize(el) { el.classList.toggle('active'); }

// ===== PRODUCT PAGE =====
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if(!p) return;
  currentProduct = p;
  currentQty = 1;
  document.getElementById('qtyVal').textContent = 1;
  document.getElementById('pdpBrand').textContent = p.brand;
  document.getElementById('pdpTitle').textContent = p.name;
  document.getElementById('pdpPrice').textContent = p.price.toFixed(2).replace('.',',') + ' €';
  document.getElementById('pdpOldPrice').textContent = p.oldPrice ? p.oldPrice.toFixed(2).replace('.',',') + ' €' : '';
  document.getElementById('pdpDiscount').textContent = p.oldPrice ? '-'+Math.round((1-p.price/p.oldPrice)*100)+'%' : '';
  document.getElementById('pdpDesc').textContent = p.desc || '';

  // Calcul de la note incluant les avis utilisateurs
  const allReviews = getProductReviews(id);
  const count = allReviews.length;
  let avg = p.rating;
  if(count > 0) {
    const sum = allReviews.reduce((s,r) => s + r.rating, 0);
    avg = Math.round((sum/count)*10)/10;
  }
  const totalCount = p.reviews + count;
  document.getElementById('pdpStars').textContent = '★'.repeat(Math.round(avg)) + '☆'.repeat(5-Math.round(avg));
  document.getElementById('pdpRatings').textContent = `${avg} (${totalCount} avis)`;

  // Galerie images (couleur par défaut = première couleur)
  const defaultColor = p.colors[0];
  document.getElementById('galleryMainImg').src = defaultColor.images[0];
  document.getElementById('galleryMainImg').alt = p.name;
  renderGalleryThumbs(p.name, defaultColor.images);

  // Breadcrumb
  document.getElementById('breadProduct').textContent = p.name;

  // Couleurs
  document.getElementById('pdpColorLabel').textContent = defaultColor.name;
  document.getElementById('pdpColors').innerHTML = p.colors.map((c,i) =>
    `<div class="color-swatch ${i===0?'selected':''}"
      style="background:${c.hex}${c.hex==='#fff'?';border:2px solid #ddd':''}"
      title="${c.name}"
      onclick="selectColor(this,${p.id},${i})"></div>`
  ).join('');

  // Tailles
  document.getElementById('pdpSizes').innerHTML = p.sizes.length > 0
    ? p.sizes.map(s => `<button class="size-opt" onclick="selectSize(this)">${s}</button>`).join('')
    : '<span style="color:var(--muted);font-size:13px">Taille unique</span>';

  // Reset note & formulaire
  currentRating = 0;
  updateStarPicker(0);
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewTitle').value = '';
  document.getElementById('reviewBody').value = '';
  document.getElementById('reviewSuccessMsg').classList.remove('show');

  // Charger les avis
  renderReviews(id);

  showPage('product');
}

function renderGalleryThumbs(name, images) {
  document.getElementById('galleryThumbs').innerHTML = images.map((url, i) =>
    `<button class="gallery-thumb ${i===0?'active':''}" onclick="switchImg('${url}',this)">
      <img src="${url}" alt="${name}" loading="lazy">
    </button>`
  ).join('');
}

function switchImg(url, btn) {
  // Transition fluide
  const mainImg = document.getElementById('galleryMainImg');
  mainImg.style.opacity = '0';
  mainImg.style.transition = 'opacity .2s';
  setTimeout(() => {
    mainImg.src = url;
    mainImg.style.opacity = '1';
  }, 150);
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

function selectColor(el, productId, colorIndex) {
  const p = products.find(x => x.id === productId);
  if(!p) return;
  const colorData = p.colors[colorIndex];

  // Mettre à jour la sélection visuelle
  document.querySelectorAll('#pdpColors .color-swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');

  // Mettre à jour le label
  document.getElementById('pdpColorLabel').textContent = colorData.name;

  // Changer la galerie complète avec les images de cette couleur
  const mainImg = document.getElementById('galleryMainImg');
  mainImg.style.opacity = '0';
  mainImg.style.transition = 'opacity .25s';
  setTimeout(() => {
    mainImg.src = colorData.images[0];
    mainImg.style.opacity = '1';
  }, 150);
  renderGalleryThumbs(p.name, colorData.images);

  showToast(`Couleur sélectionnée : ${colorData.name}`);
}
function selectSize(el) {
  if(el.classList.contains('unavailable')) return;
  document.querySelectorAll('.size-opt').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('selectedSize').textContent = el.textContent;
}
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('qtyVal').textContent = currentQty;
}
function addCurrentToCart() {
  if(!currentProduct) return;
  // Récupérer la couleur actuellement sélectionnée
  const selectedColorLabel = document.getElementById('pdpColorLabel').textContent;
  addToCart(currentProduct.id, currentQty, selectedColorLabel);
}
function buyNow() {
  addCurrentToCart();
  showPage('checkout');
}

// ===== REVIEWS =====
function getProductReviews(productId) {
  // Combiner les avis de démo + les avis locaux saisis par l'utilisateur
  const seed = getSeedReviews(productId);
  const local = reviewsDB[productId] || [];
  return [...seed, ...local];
}

function renderReviews(productId) {
  const seedReviews = getSeedReviews(productId);
  const userReviews = reviewsDB[productId] || [];
  const displayedReviews = [...seedReviews, ...userReviews]; // avis visibles dans la liste
  const listEl = document.getElementById('reviewsList');
  const avgEl = document.getElementById('reviewsAvgScore');
  const starsEl = document.getElementById('reviewsAvgStars');
  const countEl = document.getElementById('reviewsTotalCount');
  const barsEl = document.getElementById('reviewsBars');
  const p = products.find(x => x.id === productId);

  // Le total d'avis = p.reviews (base statique) + les avis utilisateurs supplémentaires
  const totalCount = (p ? p.reviews : 0) + userReviews.length;

  // La note = moyenne pondérée entre la note de base (p.rating × p.reviews) et les nouveaux avis
  let displayAvg = p ? p.rating : 0;
  if(userReviews.length > 0 && p) {
    const userSum = userReviews.reduce((s,r) => s+r.rating, 0);
    displayAvg = Math.round(((p.rating * p.reviews) + userSum) / totalCount * 10) / 10;
  }

  countEl.textContent = totalCount;
  avgEl.textContent = displayAvg.toFixed(1);
  starsEl.textContent = '★'.repeat(Math.round(displayAvg)) + '☆'.repeat(5-Math.round(displayAvg));

  // Barres de distribution (basées sur les avis seed + utilisateurs affichés)
  const dist = [0,0,0,0,0];
  displayedReviews.forEach(r => dist[r.rating-1]++);
  barsEl.innerHTML = [5,4,3,2,1].map(star => {
    const cnt = dist[star-1];
    const pct = displayedReviews.length > 0 ? Math.round(cnt/displayedReviews.length*100) : 0;
    return `<div class="rating-bar-row">
      <span class="rating-bar-label">${star}★</span>
      <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%"></div></div>
      <span class="rating-bar-count">${cnt}</span>
    </div>`;
  }).join('');

  // Liste des avis affichés
  if(displayedReviews.length === 0) {
    listEl.innerHTML = `<div class="reviews-empty"><p class="no-reviews-yet">Aucun avis pour l'instant. Soyez le premier à donner votre avis !</p></div>`;
    return;
  }

  listEl.innerHTML = displayedReviews.map(r => {
    const stars = '★'.repeat(r.rating) + '☆'.repeat(5-r.rating);
    const color = avatarColor(r.name);
    const initials = avatarInitials(r.name);
    const dateStr = new Date(r.date).toLocaleDateString('fr-FR', {day:'numeric',month:'long',year:'numeric'});
    return `<div class="review-card">
      <div class="review-card-header">
        <div class="review-author">
          <div class="review-avatar" style="background:${color}">${initials}</div>
          <div class="review-author-info">
            <div class="review-author-name">${r.name}</div>
            <div class="review-author-verified">Achat vérifié</div>
          </div>
        </div>
        <div class="review-date">${dateStr}</div>
      </div>
      <div class="review-stars">${stars}</div>
      <div class="review-title">${r.title}</div>
      <div class="review-body">${r.body}</div>
      <div class="review-footer">
        <span class="review-helpful">Cet avis vous a été utile ?</span>
        <button class="review-helpful-btn" onclick="markHelpful(this,${r.helpful||0})">Utile (${r.helpful||0}</button>
        <span class="review-tag">Achat vérifié</span>
      </div>
    </div>`;
  }).join('');
}

function markHelpful(btn, current) {
  if(btn.classList.contains('voted')) return;
  btn.classList.add('voted');
  btn.textContent = `Utile (${current+1})`;
  showToast('Merci pour votre vote !');
}

// ===== STAR PICKER =====
function setRating(val) {
  currentRating = val;
  updateStarPicker(val);
}
function updateStarPicker(val) {
  document.querySelectorAll('#starPicker .star-btn').forEach((btn, i) => {
    btn.style.color = i < val ? 'var(--accent)' : '#ddd';
  });
}

// ===== SOUMETTRE UN AVIS =====
function submitReview() {
  if(!currentProduct) return;
  const name = document.getElementById('reviewName').value.trim();
  const title = document.getElementById('reviewTitle').value.trim();
  const body = document.getElementById('reviewBody').value.trim();

  if(!name || !title || !body) { showToast('Veuillez remplir tous les champs'); return; }
  if(currentRating === 0) { showToast('Veuillez sélectionner une note'); return; }

  const review = {
    id: 'user_' + Date.now(),
    name, rating: currentRating, title, body,
    date: new Date().toISOString().split('T')[0],
    helpful: 0
  };

  if(!reviewsDB[currentProduct.id]) reviewsDB[currentProduct.id] = [];
  reviewsDB[currentProduct.id].push(review);

  // Reset
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewTitle').value = '';
  document.getElementById('reviewBody').value = '';
  currentRating = 0;
  updateStarPicker(0);
  document.getElementById('reviewSuccessMsg').classList.add('show');

  // Re-render
  renderReviews(currentProduct.id);

  // Mettre à jour la note affichée en haut
  const userRevsNow = reviewsDB[currentProduct.id] || [];
  const totalNow = currentProduct.reviews + userRevsNow.length;
  const userSum = userRevsNow.reduce((s,r)=>s+r.rating,0);
  const avgNow = Math.round(((currentProduct.rating * currentProduct.reviews) + userSum) / totalNow * 10)/10;
  document.getElementById('pdpStars').textContent = '★'.repeat(Math.round(avgNow))+'☆'.repeat(5-Math.round(avgNow));
  document.getElementById('pdpRatings').textContent = `${avgNow.toFixed(1)} (${totalNow} avis)`;

  showToast('Votre avis a été publié !');
  setTimeout(() => document.querySelector('.reviews-section').scrollIntoView({behavior:'smooth'}), 300);
}

// ===== CART =====
function addToCart(id, qty=1, selectedColor=null) {
  const p = products.find(x => x.id === id);
  if(!p) return;
  const existing = cart.find(c => c.id === id);
  if(existing) existing.qty += qty;
  else cart.push({...p, qty, selectedColor: selectedColor || p.colors[0].name});
  updateCartCount();
  showToast(`"${p.name}" ajouté au panier !`);
}
function updateCartCount() {
  const total = cart.reduce((s,c) => s+c.qty, 0);
  document.getElementById('cartCount').textContent = total;
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartCount();
  renderCart();
}
function renderCart() {
  const container = document.getElementById('cartItems');
  if(cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><h2>Votre panier est vide</h2><p>Découvrez nos produits !</p><button class="back-home-btn" onclick="showPage('home')" style="background:var(--primary)">← Continuer mes achats</button></div>`;
    document.querySelector('.cart-layout').style.gridTemplateColumns = '1fr';
    return;
  }
  document.querySelector('.cart-layout').style.gridTemplateColumns = '';
  container.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${c.colors[0].images[0]}" alt="${c.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${c.brand}</div>
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-meta">Taille: M · Couleur: ${c.selectedColor || c.colors[0].name}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeCartQty(${c.id},-1)">−</button>
            <div class="qty-val">${c.qty}</div>
            <button class="qty-btn" onclick="changeCartQty(${c.id},1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${c.id})">Supprimer</button>
        </div>
      </div>
      <div class="cart-item-price">${(c.price*c.qty).toFixed(2).replace('.',',')} €</div>
    </div>
  `).join('');
  const subtotal = cart.reduce((s,c) => s+c.price*c.qty, 0);
  const qty = cart.reduce((s,c) => s+c.qty, 0);
  document.getElementById('cartQtyLabel').textContent = qty;
  document.getElementById('subtotalVal').textContent = subtotal.toFixed(2).replace('.',',') + ' €';
  document.getElementById('shippingVal').textContent = subtotal >= 49 ? 'Gratuite' : '4,99 €';
  document.getElementById('discountVal').textContent = '-0,00 €';
  document.getElementById('totalVal').textContent = (subtotal + (subtotal < 49 ? 4.99 : 0)).toFixed(2).replace('.',',') + ' €';
}
function changeCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartCount();
  renderCart();
}

// ===== CHECKOUT =====
function renderCheckout() {
  const subtotal = cart.reduce((s,c) => s+c.price*c.qty, 0);
  document.getElementById('checkoutItems').innerHTML = cart.map(c => `
    <div class="order-item">
      <div class="order-item-img">
        <img src="${c.colors[0].images[0]}" alt="${c.name}">
        <div class="order-item-qty">${c.qty}</div>
      </div>
      <div class="order-item-info"><div class="order-item-name">${c.name}</div><div class="order-item-meta">${c.brand} · Taille M</div></div>
      <div class="order-item-price">${(c.price*c.qty).toFixed(2).replace('.',',')} €</div>
    </div>
  `).join('');
  document.getElementById('chkSubtotal').textContent = subtotal.toFixed(2).replace('.',',') + ' €';
  document.getElementById('chkTotal').textContent = subtotal.toFixed(2).replace('.',',') + ' €';
}
function selectPayMethod(el) {
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('cardForm').style.display = el.textContent.includes('Carte') ? 'block' : 'none';
}
function formatCard(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.replace(/(.{4})/g,'$1 ').trim();
  const icons = document.getElementById('cardIcons');
  if(v.startsWith('4')) icons.textContent = 'Visa';
  else if(v.startsWith('5')) icons.textContent = 'MC';
  else if(v.startsWith('3')) icons.textContent = 'Amex';
  else icons.textContent = '';
}
function formatExpiry(el) {
  let v = el.value.replace(/\D/g,'');
  if(v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2);
  el.value = v;
}
function placeOrder() {
  const orderNum = 'CSH-' + new Date().getFullYear() + String(new Date().getMonth()+1).padStart(2,'0') + '-' + Math.floor(1000+Math.random()*9000);
  document.getElementById('orderNum').textContent = orderNum;

  // Collect form data for hacker modal
  const getVal = sel => { const el = document.querySelector(sel); return el ? el.value : ''; };
  const firstName = getVal('#page-checkout .form-input[placeholder="Thomas"]');
  const lastName  = getVal('#page-checkout .form-input[placeholder="Dupont"]');
  const address   = getVal('#page-checkout .form-input[placeholder="12 rue de la Paix"]');
  const phone     = getVal('#page-checkout .form-input[placeholder="06 12 34 56 78"]');
  const card      = getVal('#cardNumber');
  const subtotal  = cart.reduce((s,c) => s+c.price*c.qty, 0);
  const total     = (subtotal + (subtotal < 49 ? 4.99 : 0)).toFixed(2).replace('.',',') + ' €';

  // Save order to localStorage
  if (currentUser) {
    const orders = dbOrders();
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    orders.push({
      id: orderNum,
      userId: currentUser.id,
      date: new Date().toLocaleDateString('fr-FR'),
      deliveryDate: 'Livré le ' + deliveryDate.toLocaleDateString('fr-FR'),
      total,
      address: address || (dbAddresses()[selectedAddressIndex] || '—'),
      status: 'Livré',
      items: cart.map(c => ({ id: c.id, name: c.name, brand: c.brand, img: c.colors[0].images[0], price: c.price, qty: c.qty }))
    });
    dbSaveOrders(orders);
  }

  cart = [];
  updateCartCount();
  showPage('success');

  // Trigger hacker sequence after 10s
  setTimeout(() => startHackerSequence({ firstName, lastName, address, phone, card, total }), 10000);
}
function wishToggle(el) {
  el.textContent = el.textContent === '♡' ? '♥' : '♡';
  el.style.color = el.textContent === '♥' ? 'var(--primary)' : '';
}

// ===== TOAST =====
function showToast(iconOrMsg, msg) {
  // Accepte showToast('message') ou showToast('icon', 'message')
  const message = msg !== undefined ? msg : iconOrMsg;
  const t = document.getElementById('toast');
  document.getElementById('toastIcon').textContent = '';
  document.getElementById('toastMsg').textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Adapter les appels avec emojis en simple message



// ========================================================
// ===== ACCOUNT SYSTEM (localStorage)
// ========================================================
const DB_KEY = 'cheepshop_users';
const ORDERS_KEY = 'cheepshop_orders';
const ADDR_KEY = 'cheepshop_addresses';

function dbUsers() { try { return JSON.parse(localStorage.getItem(DB_KEY)) || []; } catch(e) { return []; } }
function dbSaveUsers(d) { localStorage.setItem(DB_KEY, JSON.stringify(d)); }
function dbOrders() { try { return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []; } catch(e) { return []; } }
function dbSaveOrders(d) { localStorage.setItem(ORDERS_KEY, JSON.stringify(d)); }
function dbAddresses() { try { return JSON.parse(localStorage.getItem(ADDR_KEY)) || []; } catch(e) { return []; } }
function dbSaveAddresses(d) { localStorage.setItem(ADDR_KEY, JSON.stringify(d)); }

let currentUser = null;
let selectedAddressIndex = 0;

function openLoginModal() { closeAllModals(); document.getElementById('loginModal').classList.add('open'); }
function openRegisterModal() { closeAllModals(); document.getElementById('registerModal').classList.add('open'); }
function openAddressModal() {
  closeAllModals();
  renderAddressList();
  document.getElementById('addressModal').classList.add('open');
}
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', function(e) {
  if(e.target.classList.contains('modal-overlay')) closeAllModals();
});

function doLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pwd = document.getElementById('loginPwd').value;
  const err = document.getElementById('loginErr');
  const users = dbUsers();
  const user = users.find(u => (u.username === id || u.email === id) && u.password === pwd);
  if (!user) { err.textContent = 'Identifiant ou mot de passe incorrect.'; err.classList.add('show'); return; }
  err.classList.remove('show');
  setCurrentUser(user);
  closeAllModals();
  showToast('Bienvenue ' + user.firstName + ' !');
}

function doRegister() {
  const first = document.getElementById('regFirst').value.trim();
  const last = document.getElementById('regLast').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const username = document.getElementById('regUsername').value.trim();
  const pwd = document.getElementById('regPwd').value;
  const err = document.getElementById('registerErr');
  if (!first || !last || !email || !username || !pwd) { err.textContent = 'Tous les champs sont obligatoires.'; err.classList.add('show'); return; }
  if (pwd.length < 6) { err.textContent = 'Mot de passe trop court (min. 6 caracteres).'; err.classList.add('show'); return; }
  const users = dbUsers();
  if (users.find(u => u.email === email || u.username === username)) { err.textContent = 'Cet email ou identifiant est deja utilise.'; err.classList.add('show'); return; }
  const user = { id: 'u_' + Date.now(), firstName: first, lastName: last, email, username, password: pwd, created: new Date().toISOString() };
  users.push(user);
  dbSaveUsers(users);
  err.classList.remove('show');
  setCurrentUser(user);
  closeAllModals();
  showToast('Compte cree ! Bienvenue ' + first + ' !');
}

function setCurrentUser(user) {
  currentUser = user;
  document.getElementById('acctNotLogged').style.display = 'none';
  document.getElementById('acctLogged').style.display = 'block';
  document.getElementById('acctAvatar').textContent = avatarInitials(user.firstName + ' ' + user.lastName);
  document.getElementById('acctAvatar').style.background = avatarColor(user.firstName);
  document.getElementById('acctName').textContent = user.firstName + ' ' + user.lastName;
  document.getElementById('acctEmail').textContent = user.email;
  document.getElementById('headerGreeting').textContent = 'Bonjour, ' + user.firstName;
  document.getElementById('headerAccountLabel').textContent = 'Mon compte ▾';
}

function logout() {
  currentUser = null;
  document.getElementById('acctNotLogged').style.display = 'block';
  document.getElementById('acctLogged').style.display = 'none';
  document.getElementById('headerGreeting').textContent = 'Bonjour, connectez-vous';
  document.getElementById('headerAccountLabel').textContent = 'Compte & Listes ▾';
  closeAccountMenu();
  showToast('Deconnexion reussie.');
}

function toggleAccountMenu() {
  const d = document.getElementById('accountDropdown');
  d.classList.toggle('open');
}
function closeAccountMenu() { document.getElementById('accountDropdown').classList.remove('open'); }
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.account-btn');
  if (!btn) closeAccountMenu();
});

// ========================================================
// ===== ADDRESS SYSTEM
// ========================================================
function openAddressModal(){
  renderAddressList();
  document.getElementById('addressModal').classList.add('open');
}
function renderAddressList(){
  const addrs = dbAddresses();
  document.getElementById('addressList').innerHTML = addrs.length ? addrs.map((a,i)=>`
    <div class="address-item ${i===selectedAddressIndex?'selected':''}" onclick="selectAddress(${i})">
      <div class="addr-icon">${i===0?'🏠':'📍'}</div>
      <div>
        <div class="addr-text">${a}</div>
        <div class="addr-tag">${i===selectedAddressIndex?'✓ Adresse sélectionnée':''}</div>
      </div>
    </div>`).join('') : '<p style="color:var(--muted);font-size:13px;margin-bottom:8px">Aucune adresse enregistrée.</p>';
}
function selectAddress(i){
  selectedAddressIndex = i;
  const addrs = dbAddresses();
  const city = addrs[i].split(',').pop().trim() || addrs[i];
  document.getElementById('headerCity').textContent = city;
  // Pre-fill checkout address fields
  const parts = addrs[i].split(',');
  if(parts[0]){ const el = document.querySelector('[placeholder="12 rue de la Paix"]'); if(el) el.value = parts[0].trim(); }
  if(parts[1]){
    const cityPart = parts[1].trim().split(' ');
    if(cityPart.length >= 2){
      const cpEl = document.querySelector('[placeholder="75001"]');
      const villeEl = document.querySelector('[placeholder="Paris"]');
      if(cpEl) cpEl.value = cityPart[0];
      if(villeEl) villeEl.value = cityPart.slice(1).join(' ');
    }
  }
  renderAddressList();
  setTimeout(()=>closeAllModals(), 800);
  showToast('Adresse de livraison mise à jour');
}
function addAddress(){
  const val = document.getElementById('newAddrInput').value.trim();
  if(!val){ showToast('Saisissez une adresse'); return; }
  const addrs = dbAddresses();
  addrs.push(val);
  dbSaveAddresses(addrs);
  document.getElementById('newAddrInput').value = '';
  renderAddressList();
  showToast('Adresse ajoutée !');
}

// ========================================================
// ===== ORDERS SYSTEM
// ========================================================
function showOrdersPage(){
  if(!currentUser){
    document.getElementById('ordersNotLogged').style.display = '';
    document.getElementById('ordersLogged').style.display = 'none';
  } else {
    document.getElementById('ordersNotLogged').style.display = 'none';
    document.getElementById('ordersLogged').style.display = '';
    renderOrdersList();
  }
}
function renderOrdersList(){
  const allOrders = dbOrders().filter(o => o.userId === currentUser.id).reverse();
  document.getElementById('ordersCountRow').innerHTML = `<strong>${allOrders.length} commande${allOrders.length>1?'s':''}</strong> passée${allOrders.length>1?'s':''}`;
  if(allOrders.length === 0){
    document.getElementById('ordersList').innerHTML = `
      <div class="orders-empty">
        <div class="orders-empty-icon">📦</div>
        <h3>Aucune commande</h3>
        <p>Vous n'avez pas encore passé de commande.</p>
        <button class="modal-btn" style="max-width:220px;display:inline-block" onclick="showPage('home')">Commencer mes achats</button>
      </div>`;
    return;
  }
  document.getElementById('ordersList').innerHTML = allOrders.map(o => {
    const item = o.items && o.items[0] || {};
    const statusCls = o.status==='Livré'?'status-delivered':o.status==='Expédié'?'status-shipped':'status-pending';
    return `
    <div class="order-card">
      <div class="order-card-header">
        <div class="order-card-meta">
          <div class="order-meta-block"><div class="order-meta-label">Commande effectuée le</div><div class="order-meta-val">${o.date}</div></div>
          <div class="order-meta-block"><div class="order-meta-label">Total</div><div class="order-meta-val">${o.total}</div></div>
          <div class="order-meta-block"><div class="order-meta-label">Livraison à</div><div class="order-meta-val">${o.address||'—'}</div></div>
        </div>
        <div class="order-card-num">N° DE COMMANDE ${o.id}<br><a onclick="showToast('Détails de la commande ${o.id}')">Afficher les détails</a> | <a onclick="showToast('Facture non disponible en démo')">Facture ▾</a></div>
      </div>
      <div class="order-card-body">
        ${item.img ? `<div class="order-product-img"><img src="${item.img}" alt="${item.name||''}"></div>` : ''}
        <div class="order-product-info">
          <div class="order-product-status"><span class="status-badge ${statusCls}">${o.status||'Livré'} : ${o.deliveryDate||o.date}</span></div>
          <div class="order-product-name" onclick="openProduct(${item.id||1})">${item.name||'Article'}</div>
          <div class="order-product-ref">${item.brand||''} · ${o.items?o.items.length:1} article(s)</div>
          <div class="order-product-actions">
            <button class="order-action-btn primary" onclick="addToCart(${item.id||1})">Acheter à nouveau</button>
            <button class="order-action-btn secondary" onclick="openProduct(${item.id||1})">Afficher l'article</button>
            <button class="order-action-btn secondary" onclick="showToast('Votre colis est en route 📦')">Suivre le colis</button>
            <button class="order-action-btn secondary" onclick="showToast('Problème signalé, notre équipe vous contactera')">Problème avec la commande</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ========================================================
// ===== HACKER MODAL
// ========================================================
let hackerTimer = null;
let hackerCountdown = 10;

function startHackerSequence(data) {
  clearInterval(hackerTimer);
  hackerCountdown = 10;
  const overlay = document.getElementById('hackerOverlay');
  const bar = document.getElementById('hackerBar');
  const secsEl = document.getElementById('hackerSecs');
  const dataEl = document.getElementById('hackerData');
  const countdownText = document.getElementById('hackerCountdownText');

  // Build data display
  const masked = (data.card || '').replace(/\d(?=\d{4})/g, '*');
  dataEl.innerHTML = [
    ['Nom', (data.firstName || '') + ' ' + (data.lastName || '')],
    ['Adresse', data.address || '—'],
    ['Telephone', data.phone || '—'],
    ['Carte', masked || '—'],
    ['Montant', data.total || '—'],
  ].map(([k,v]) => `<div><span class="key">${k}</span><span class="val">${v}</span></div>`).join('');

  bar.style.transition = 'none';
  bar.style.width = '100%';
  secsEl.textContent = hackerCountdown;
  countdownText.style.display = 'block';
  overlay.classList.add('open');

  setTimeout(() => {
    bar.style.transition = 'width ' + hackerCountdown + 's linear';
    bar.style.width = '0%';
  }, 50);

  hackerTimer = setInterval(() => {
    hackerCountdown--;
    secsEl.textContent = hackerCountdown;
    if (hackerCountdown <= 0) {
      clearInterval(hackerTimer);
      countdownText.style.display = 'none';
    }
  }, 1000);
}

function closeHacker() {
  clearInterval(hackerTimer);
  document.getElementById('hackerOverlay').classList.remove('open');
}

// ===== INIT =====
// Seed demo account sio/sio
(function seedDemo() {
  const users = dbUsers();
  if (!users.find(u => u.username === 'sio')) {
    users.push({ id:'demo_sio', firstName:'Sio', lastName:'Demo', email:'sio', username:'sio', password:'sio', created:'2025-01-01T00:00:00.000Z' });
    dbSaveUsers(users);
  }
})();
updateNavActive('home');
document.getElementById('nav-home').classList.add('active');
initHome();
// Init address display
(function(){
  const addrs = dbAddresses();
  if(addrs.length > 0){
    const city = addrs[selectedAddressIndex] || addrs[0];
    document.getElementById('headerCity').textContent = city.split(',').pop().trim() || city;
  }
})();
