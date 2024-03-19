# [ArreatSummit.gg] last-epoch-data

This project is a community effort to streamline skill and passive tree node data so it can be used in DPS calculation.

## How does it work

Original datamined skill tree data can bee found under
`/datamined/skillTrees.ts`. This data is made up of a skill tree for each ability and a tree for each class (containing all passive nodes).

Each node has a set of stats of the following structure

```
 {
    statName: 'Armor Shred Chance',
    value: '+25%',
    noScaling: false,
    downside: false,
    property: 10008,
    tags: 0,
    overrideSprite: false,
    sprite: 16579,
}
```

We don't want to rely on the statName, as this is just used for visual display, and does not contain all information.

The stat data needs to be converted to more strucutured format, which specifies what kind of modifier it is, what property it affects, and under which conditions.

The output looks like this

```
{
    property: Property.AILMENT_CHANCE,
    modifierType: ModifierType.ADDED,
    specialTags: Ailment.SHRED_ARMOR,
    tags: Tags.NONE,
    value: 25,
}
```

## How to contribute

We tackle one skill tree at a time.

- pick a skill tree from `/datamined/skillTrees.ts` (check progress below), e.g "mush9"
- add the tree id as an entry in the tree object in `/manuallyPRocessed/skillTreeNodes.ts`

```
const trees: Trees = {
  ...,
  mush9: {
  },
  ...
}
```

- create an entry under the new tree id for each node id and add the mapped stats as a list

```
const trees: Trees = {
  ...,
  mush9: {
    ...,
    1: [ // add stats here ],
    ...
  },
  ...
}
```

- update the progress below when commiting

### Stat Structure

```
{
    property: Property;
    modifierType: ModifierType;
    specialTags: Ailment | number;
    tags: Tags;
    value: number;
}
```

- **property**: search for the matching property in `/types/Property.ts`
- **modifierType**: can be ADDED, INCREASED, or MORE. Look at the node description if not immediatly clear from the stat
- **modifierType**: search for the matching tags in `/types/Tags.ts` and add them together. For example, Fire Melee Damage, would be Tags.FIRE + Tags.MELEE. Some tags can be missing, if this is the case, place a comment.
- **specialTags**: this is used in special cases. For example, for Property.AILMENT, the specialTags define which Ailment it applies for.
- **value**: if it's noted as a percentage, change to decimal notation. For example, +20% -> 0.2. This usually applies to INCREASED or MORE modifiers, but can also be the case for ADDED (Resistances fe).

## Progress

### Primalist

- [ ] Passive Tree (pr-1)
- [ ] Summon Wolf Tree (wo42)
- [ ] ...

### Mage

- [ ] Passive Tree (mg-1)
- [ ] ...

### Sentinel

- [ ] Passive Tree (kn-1)
- [ ] ...

### Acolyte

- [ ] Passive Tree (ac-1)
- [ ] ...

### Rogue

- [ ] Passive Tree (rg-1)
- [ ] Multishot Tree (mush9) ![100%](https://progress-bar.dev/100)
- [ ] ...
