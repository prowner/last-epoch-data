# last-epoch-data

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

## Progress

### Primalist

- [ ] Passive Tree (pr-1)
- [ ] Summon Wolf Tree (wo42)
- ...

### Mage

- [ ] Passive Tree (mg-1)
- ...

### Sentinel

- [ ] Passive Tree (kn-1)
- ...

### Acolyte

- [ ] Passive Tree (ac-1)
- ...

### Rogue

- [ ] Passive Tree (rg-1)
- [ ] Multishot Tree (mush9) ![54%](https://progress-bar.dev/54)
- ...
