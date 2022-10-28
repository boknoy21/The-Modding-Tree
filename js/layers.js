addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    branches: ["r","sp","sr"],
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 12)) mult = mult.times(upgradeEffect('p', 12))
        if (hasUpgrade('ar', 12)) mult = mult.times(upgradeEffect('ar', 12))
        if (hasUpgrade('y', 12)) mult = mult.times(upgradeEffect('y', 12))
        if (hasUpgrade('y', 13)) mult = mult.times(upgradeEffect('y', 13))
        if (hasUpgrade('c', 12)) mult = mult.times(upgradeEffect('c', 12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Yes",
            description: "Double point gain because of yes.",
            cost: new Decimal(1),
        },

        12: {
            title: "Better Yes",
            description: "Scales with your prestige points! (Also boosts PP gain.)",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },

        13: {
            title: "The Heheheha",
            description: "Scales with your prestige points! (But ^0.1)",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },

        14: {
            title: "Super Yes",
            description: "Quadruple point gain because of yes.",
            cost: new Decimal(100),
        },

        15: {
            title: "Fortnite Gaming",
            description: "Get pro at fortnite 100x Point Gain!!!",
            cost: new Decimal(10000),
        },
    },
})
addLayer("r", {
    name: "rebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "Blue",
    branches: ["ar"],
    requires: new Decimal(100000), // Can be a function that takes requirement increases into account
    resource: "Rebirth Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for rebirth points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Amogus",
            description: "Does 10x point gain.",
            cost: new Decimal(10),
        },

        12: {
            title: "The Aswdasrfege Theory",
            description: "(Literally every science tihng ever) Multiply point gain by 1,000,000",
            cost: new Decimal(50),
        },

        13: {
            title: "More Pointssssssssssssss",
            description: "Costs so much but gives x1e50 point gain.",
            cost: new Decimal(1e6),
        },
    },
})
addLayer("sp", {
    name: "superprestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00e4ff",
    branches: ["y"],
    requires: new Decimal(1e23), // Can be a function that takes requirement increases into account
    resource: "Super Prestige Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sr', 12)) mult = mult.times(upgradeEffect('sr', 12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "none", description: "None: Reset for super prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Less Memes",
            description: "NOOOOOOOOOOOOOOOOOO! Points scale with amount of SPP. (^0.5)",
            cost: new Decimal(500),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },

        12: {
            title: "More Points II",
            description: "Multiplies SPP by something",
            cost: new Decimal(1500),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        
        13: {
            title: "More Points III",
            description: "Multiplies SPP by something",
            cost: new Decimal(500000),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
addLayer("sr", {
    name: "superrebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SR", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0c0d5f",
    branches: ["b"],
    requires: new Decimal(1e23), // Can be a function that takes requirement increases into account
    resource: "Super Rebirth Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "none", description: "none: Reset for super rebirth points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Bruh",
            description: "Does Bruh",
            cost: new Decimal(11111),
        },

        12: {
            title: "YesYes",
            description: "Multiplies SPP by a lot.",
            cost: new Decimal(1500),
            effect() {
                return player[this.layer].points.times(1.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})

addLayer("b", {
    name: "bruh", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "Grey",
    requires: new Decimal("e69420"), // Can be a function that takes requirement increases into account
    resource: "Bruhs", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('b', 12)) mult = mult.times(upgradeEffect('b', 12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "b: Reset for Bruhs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "More Bruh",
            description: "Bruh is best meme 10/10.",
            cost: new Decimal(69.420),
        },

        12: {
            title: "Bruhhhhhhhhhh",
            description: "Bruhhhhhhhhh I was playing fortnite!",
            cost: new Decimal(69420),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
addLayer("ar", {
    name: "AmogusRebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "AR", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "Red",
    requires: new Decimal("e70"), // Can be a function that takes requirement increases into account
    resource: "Amogus Rebirth Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "a: Reset for Amogus Rebirths no r ;-;", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Imposter Amogus",
            description: "Scaling thing again. Also gives x1,000,000 point.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },

        12: {
            title: "Multiply PP",
            description: "Multiplies PP by 10",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).times(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        13: {
            title: "Fard",
            description: "But I thought fards = :skull:",
            cost: new Decimal(3),
        },

        14: {
            title: "Anti-Fard",
            description: " ------------------------(WARNING: YOU NEED FARD FOR IT TO DO SOMETHING!)-------------------------------                                       Remove Fard Boost But Get Scaling! Formula: Points = Points + 1^1.2 times 1e125.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(1.2).times(1e125)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        15: {
            title: "Xing Ming",
            description: "Xing Xong. Times 1,000,000 Points.",
            cost: new Decimal(50),
        },

        16: {
            title: "Yes Returns",
            description: "Yes likes you. x1e9 Points.",
            cost: new Decimal(100),
        },
    },
})
addLayer("y", {
    name: "Yes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Y", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "Green",
    branches: ["c"],
    requires: new Decimal("e150"), // Can be a function that takes requirement increases into account
    resource: "Yes", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('y', 15)) mult = mult.times(10)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "none", description: "None: Reset for Yes... No hotkey combos ;-;", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Yes Class",
            description: "Go to yes class. Points times 1e20",
            cost: new Decimal("e10"),
        },

        12: {
            title: "Multiply PP II",
            description: "Multiplies PP by 1e6 base!",
            cost: new Decimal("e50"),
            effect() {
                return player[this.layer].points.add(1).times("e6")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        13: {
            title: "Multiply PP III",
            description: "x1e10 base...",
            cost: new Decimal("e100"),
            effect() {
                return player[this.layer].points.add(1).times("e10")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        14: {
            title: "Yessir",
            description: "New Yes?",
            cost: new Decimal("e250"),
        },

        15: {
            title: "MORE YES",
            description: "Yes earnings x10",
            cost: new Decimal("e1500"),
        },

        16: {
            title: "Meme Reset",
            description: "Every meme go :skull:",
            cost: new Decimal("e2500"),
        },
    },
})

addLayer("c", {
    name: "Cheetos", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "Yellow",
    branches: ["cb"],
    requires: new Decimal("e1000"), // Can be a function that takes requirement increases into account
    resource: "Cheetos", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "c: Reset for Cheetos!", onPress(){
            if (canReset(this.layer)) {
                doReset(this.layer)
            }
        }},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Feed the kid in your basement",
            description: "Wait wha- x1e5000 Points",
            cost: new Decimal("0"),
        },

        12: {
            title: "Multiply PP IV",
            description: "Multiplies PP by 1e50 base!",
            cost: new Decimal("50"),
            effect() {
                return player[this.layer].points.add(1).times("e50")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },

    milestones: {
        0: {
            requirementDescription: "25 Cheetos",
            effectDescription: "Auto Cheeto",
            ToolTip:"More food",
            toggles: ["c", "auto"],
            done() { return player.c.points.gte(25) }
        }
    }
})
addLayer("cb", {
    name: "CheetoBags", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b45f06",
    requires: new Decimal("125"), // Can be a function that takes requirement increases into account
    resource: "Cheeto Bags", // Name of prestige currency
    baseResource: "Cheetos", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "none", description: "none: Reset for Cheeto Bags!", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Feed the kid in your basement",
            description: "Wait wha- x1e5000 Points",
            cost: new Decimal("1"),
        },

        12: {
            title: "Multiply PP IV",
            description: "Multiplies PP by 1e50 base!",
            cost: new Decimal("50"),
            effect() {
                return player[this.layer].points.add(1).times("e50")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },

    milestones: {
        0: {
            requirementDescription: "25 Cheetos",
            effectDescription: "Auto Cheeto",
            ToolTip:"More food",
            Toggles: [["c", "auto"]],
            done() { return player.c.points.gte(25) }
        }
    }
})
