export enum Tags {
  NONE = 0,
  PHYSICAL = 1,
  LIGHTNING = 2,
  COLD = 4,
  FIRE = 8,
  VOID = 16,
  NECROTIC = 32,
  POISON = 64,
  ELEMENTAL = 128,
  SPELL = 256,
  MELEE = 512,
  THROWING = 1024,
  BOW = 2048,
  DOT = 4096,
  MINION = 8192,
  CLOSE_ENEMY = 268435456, // made up tag, does not exist on affix properties
  FAR_ENEMY = 536870912, // made up tag, does not exist on affix properties
  NOT_MOVED_1S = 1073741824, // made up tag, does not exist on affix properties
  SLOWED_ENEMY = 2147483648, // made up tag, does not exist on affix properties
}
