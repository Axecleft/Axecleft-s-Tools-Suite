# Shop Tags (etiquetas de loja)

**Onde:** **Axecleft's Tools → Shop Tags**, ou o separador **Shop Tags** do Merchant Generator.

Distribua os itens dos seus compêndios entre as lojas que os vendem. Um item já é vendido pelas lojas que têm em stock o próprio tipo dele (um tomo mágico é um item maravilhoso, por isso as lojas de magia o vendem). Uma **etiqueta de loja** permite que outras lojas também o vendam: etiquete o tomo como *Scroll* e os escribas o terão; etiquete como *Book* e os livreiros terão.

> **<img width="599" height="535" alt="image" src="https://github.com/user-attachments/assets/38eb2460-4af8-42ff-8db7-f6a3ae13c2a2" />**

## Como funcionam as etiquetas de loja

As etiquetas de loja são etiquetas de item normais do D35E, escritas como `Shop: Scroll`, `Shop: Book` e assim por diante. Esta ferramenta as escreve automaticamente, e também pode adicioná-las ou removê-las à mão nas etiquetas de um item.

- As **etiquetas de categoria** adicionam o item a essa categoria além da sua: `Shop: Gem` (gema), `Shop: Art object` (objeto de arte), `Shop: Tools and gear` (ferramentas e equipamento), `Shop: Alchemical item` (item alquímico), `Shop: Poison` (veneno), `Shop: Weapon` (arma), `Shop: Armor` (armadura), `Shop: Shield` (escudo), `Shop: Ammunition` (munição), `Shop: Masterwork weapon` (arma obra-prima), `Shop: Masterwork armor` (armadura obra-prima), `Shop: Magic weapon` (arma mágica), `Shop: Magic armor` (armadura mágica), `Shop: Potion` (poção), `Shop: Scroll` (pergaminho), `Shop: Wand` (varinha), `Shop: Ring` (anel), `Shop: Rod` (bastão), `Shop: Staff` (cajado), `Shop: Wondrous item` (item maravilhoso).
- As **etiquetas de especialidade** escolhem os itens maravilhosos de uma loja especializada: **Book** (livreiros), **Clothing** (alfaiates), **Jewelry** (joalheiros). Os seus próprios [tipos de loja](pt-PT-Gerador-de-mercadores#separador-shop-types) também podem usá-las.
- As etiquetas de loja são sempre escritas em inglês (`Shop: Scroll`), qualquer que seja o idioma do mundo, para que todos os mundos as leiam.

## Etiquetar um compêndio

> **<img width="597" height="822" alt="image" src="https://github.com/user-attachments/assets/b5ce8d90-dd1b-4e0d-a5db-2000df7d07e1" />**

1. **Compendium** (compêndio): escolha um compêndio de itens e clique em **Scan** (analisar).
   - As sugestões vêm dos nomes dos itens e das pastas: uma pasta chamada "Books" sugere Scroll e Book.
   - Se o compêndio não estiver entre as suas fontes de itens, uma nota avisa, com um botão para adicioná-lo.
2. **Show** (mostrar): All items (todos os itens), Items with Shop tags (com etiquetas de loja), Items without Shop tags (sem etiquetas de loja), Rows with new suggestions (linhas com sugestões novas) ou Ticked rows (linhas marcadas).
3. **Filter by name, folder or tag** (filtrar por nome, pasta ou etiqueta) para reduzir as linhas.
4. Cada linha mostra o **Item**, como ele é vendido agora em **Sold as** (vendido como) e as suas **Shop tags**. Edite diretamente as etiquetas de uma linha, separadas por vírgulas.
5. Marque as linhas a mudar. A caixa do cabeçalho marca ou desmarca todas as linhas mostradas.
6. Para mudar muitas linhas de uma vez:
   - **Add** (adicionar): adiciona uma etiqueta a cada linha marcada.
   - **Remove** (remover): remove uma etiqueta de cada linha marcada.
   - **Clear** (limpar): limpa as etiquetas de cada linha marcada.
   - **Reset** (redefinir): volta às etiquetas atuais mais as sugestões.
7. Clique em **Write Tags to Ticked Items** (gravar as etiquetas nos itens marcados). Uma linha marcada sem etiquetas tem as suas etiquetas de loja removidas.

## Observações

- Só os compêndios das suas [fontes de itens](pt-PT-Gerador-de-mercadores#separador-item-sources) abastecem os mercadores.
- Compêndios bloqueados são desbloqueados para a gravação e bloqueados de novo.
- Grave as etiquetas nos **os seus próprios** compêndios. Os compêndios do sistema e dos módulos são substituídos quando atualizam, e as etiquetas se perderiam.
