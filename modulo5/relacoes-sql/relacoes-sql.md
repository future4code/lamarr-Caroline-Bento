# Relações SQL
### Exercicio 1:
a) Também conhecida como *Foreign key*, estabelece o relacionamento entre as tabelas, linkando diretamente à chave primária.
b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comments TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comments, rate, movie_id) 
VALUES(
	"004",
    "top",
    10,
    "014"
);
```
c) Dá erro, pois não encontra Id correspondente, ou seja, a foreign key não é a mesma que a primary key, daí as entidades não se comunicam.
d)
```
ALTER TABLE Movie DROP COLUMN rating;
```
e) Não há possibilidade de deleta, porque a entidade está relacionada à avaliação, a qual está como chave primária, sendo a entidade de filmes dependente dela.
### Exercício 2:
a) Na tabela foram criadas 2 chaves estrangeiras referentes à filmes e atores e identificadas pelo id de cada um. Assim, a tabela está criando um relacionamento entre as tabelas filmes e atores.
b) 
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"005",
    "001"
)
```
c) Não foi possível adiciona, porque houve um erro em relacionar o filho à chave estrangeira, porque não existe.
d) Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desativar o modo de segurança, alterne a opção em Preferências -> Editor SQL e reconecte.
### Exercício 3:
a) A query está dizendo que é para ser mostrado apenas aqueles que tem ligação (ON) entre as avaliações e os filmes. Isso é identificado pelos IDs e chave estrangeira.
b) 