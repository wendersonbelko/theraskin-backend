
INSERT INTO categories(name) VALUES('Anti-idade');
INSERT INTO products(name,image,description,composition,skin_type,price,category_id) VALUES(
    'THERASKIN EURYALE C',
    'https://theraskin.com.br/wp-content/uploads/2021/05/EURYALE-C-SITE.jpg',
    'O sérum anti-idade desenvolvido a partir da inteligência artificial

    A revolução da Vitamina C em um multifuncional sérum anti-idade
    A Theraskin®, com o auxílio da inteligência artificial traz uma tecnologia exclusiva e inovadora de Vitamina C Pura estabilizada.

    EURYALE®C , o primeiro dermocosmético desenvolvido a partir da Inteligência Artificial é um sérum com 10% de Vitamina C pura estabilizada, com potente ação antioxidante que:

    Reduz rugas finas e linhas de expressão.
    Aumenta a elasticidade, a firmeza e a textura da pele
    Melhora o viço e luminosidade da pele
    Controla a oleosidade com ação antibrilho
    Possui efeito uniformizador visível imediato
    Apresenta sensorial diferenciado com toque aveludado
    Pode ser utilizado no rosto, colo e pescoço, e em todos os tipos de pele, incluindo as mais sensíveis e oleosas com tendência à acne.',
    'blablabla',
    2,
    100,
    1
);

INSERT INTO drugstores(name,description,image,is_online,is_physical,uf,city,street,district,zip_code,latitude,longitude) 
VALUES('Empresa','Descrição','https://theraskin.com.br/wp-content/uploads/2021/05/EURYALE-C-SITE.jpg',1,1,'SP','São Paulo','Rua Amadeu Menocchi, 87','Vila Joao Batista','02675031',-23.463820,-46.700350);

INSERT INTO drugstores_inventory(drugstore_id,products_id,available) VALUES(1,1,1);
