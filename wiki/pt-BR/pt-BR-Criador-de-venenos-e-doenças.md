# Poison & Disease Creator (criador de venenos e doenças; Traps, Poisons, and Diseases)

**Onde:** **Axecleft's Tools → Poison & Disease Creator**. Só o Mestre.

Crie um novo veneno ou uma nova doença. Cada um é criado como dois itens do D35E:
- um item de **ataque**, que rola a resistência e aplica os efeitos;
- um item **consumível**, o frasco ou a dose que um personagem carrega, usa e compra.

> **<img width="973" height="952" alt="image" src="https://github.com/user-attachments/assets/ed1f0366-fd21-4a10-ad47-4640c5a9dff8" />**

## O formulário

| Controle | O que faz |
|---|---|
| **Template** (modelo) | Parta de um veneno ou doença existente para preencher o formulário, e mude só o necessário. Agrupados como **Module poisons** (venenos do módulo), **Module diseases** (doenças do módulo) e **Your custom poisons & diseases** (seus venenos e doenças personalizados). **— None (start blank) —** (nenhum, começar em branco) limpa tudo. |
| **Type** (tipo) | **Poison** (veneno) ou **Disease** (doença). O formulário se adapta. |
| **Name** (nome) | Por exemplo *Veneno de víbora do pântano*. |
| **Delivery** (forma de contágio) | **Contact** (contato), **Ingested** (ingestão), **Inhaled** (inalação) ou **Injury** (ferimento). |
| **Saving throw** (teste de resistência) | **Fortitude**, **Reflex** (Reflexos) ou **Will** (Vontade), e a CD de resistência. |
| **Price (gp)** (preço, PO) | O preço do consumível. |
| **Notes** (notas) | Uma descrição opcional. |
| **Also add to Items** (adicionar também a Items) | Copia também os dois itens para a pasta de itens **Custom Poisons & Diseases**. |

**Só venenos:**

| Controle | O que faz |
|---|---|
| **Initial damage** (dano inicial) | Na exposição, com uma resistência falha. Por exemplo `1d6 Con`, `2d12 hp` ou `unconsciousness 1 minute`. |
| **Secondary damage** (dano secundário) | 1 minuto depois, com uma segunda resistência falha. Por exemplo `2d6 Con` ou `1d4 Con + 1d3 Wis`. |

**Só doenças:**

| Controle | O que faz |
|---|---|
| **Incubation** (incubação) | Por exemplo `1d3 days`. |
| **Damage (each day)** (dano, a cada dia) | Depois da incubação, a cada dia com uma resistência falha. |
| **Recovery** (recuperação) | **Two successful saves in a row** (dois sucessos seguidos na resistência, SRD) ou **Three successful saves in a row** (três seguidos). |

### O que você pode digitar nas caixas de dano

Escreva os efeitos em inglês, qualquer que seja o idioma do mundo.

| Efeito | Exemplo |
|---|---|
| Dano de habilidade | `1d6 Con` |
| Dreno de habilidade (permanente) | `1 Con drain` |
| Dano nos pontos de vida | `2d12 hp` |
| Nenhum efeito | `0` |
| Condição, com duração opcional | `unconsciousness 2d4 hours`, `paralysis 2d6 minutes` |
| Vários efeitos | Junte com `+`: `1d4 Con + 1d3 Wis` |

Habilidades: `Str` (For), `Dex` (Des), `Con`, `Int`, `Wis` (Sab), `Cha` (Car). Condições que ele reconhece: unconsciousness (inconsciência), paralysis (paralisia), stunned (atordoado), shaken (abalado), frightened (amedrontado), petrified (petrificado), prone (caído), blindness (cegueira), sickened (enjoado), fatigued (fatigado), exhausted (exausto), deafened (surdo), dazzled (ofuscado), nauseated (nauseado). Cada uma aplica sua condição ou buff do D35E.

Qualquer outra coisa é publicada no chat como mensagem quando o efeito acontece.

### Efeitos do modelo

Um modelo pode trazer efeitos que o formulário não mostra. Eles aparecem em **The template also has these effects** (o modelo também tem estes efeitos), cada um com uma caixa **Keep** (manter).

### A prévia

O fim do formulário mostra o que será criado, por exemplo:
- **Will create:** (será criado) *Poison, Swamp Adder Venom* (ataque) e *Swamp Adder Venom* (consumível). O ataque de uma doença se chama *Disease, …*.
- **Initial** (inicial: na exposição, resistência falha) e **Secondary** (secundário: 1 minuto depois, segunda resistência falha), cada um com seus efeitos.
- Depois o veneno segue seu curso e termina. O buff **Poisoned** (envenenado) dura 10 rodadas; as condições que ele causou duram o tempo delas.
- Para uma doença: **After {incubation}, each day (failed save)** (depois de {incubação}, a cada dia, resistência falha), o dano diário e a regra de recuperação.

Confira a prévia antes de clicar em **Create** (criar).

## Onde fica salvo

- No compêndio de mundo **Custom Poisons & Diseases**, criado na primeira vez que você usa o criador. Os ataques vão para a pasta **Poisons** ou **Diseases** dele, os consumíveis para **Consumables**.
- Com **Also add to Items**, também na pasta **Custom Poisons & Diseases** da barra lateral Items.
- Se já existir um item com o mesmo nome, você é perguntado se quer substituí-lo.
- Se o compêndio estiver bloqueado, desbloqueie-o e tente de novo.

Seus venenos e doenças personalizados aparecem na lista **Template** do criador, para você copiá-los e mudá-los depois.

## Observações

- Um veneno precisa de um efeito inicial ou secundário. Uma doença precisa do seu dano e do seu período de incubação. A CD de resistência precisa ser maior que 0.
- Os consumíveis de veneno dos compêndios do módulo são estocados pelos mercadores (veja [Merchant Generator](pt-BR-Gerador-de-mercadores#aba-item-sources)).
