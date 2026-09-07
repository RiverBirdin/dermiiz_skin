const fs = require('fs');
const path = require('path');

const mappings = [
    // Skin
    ['skin.html#acne-treatment', 'services/acne-treatment.html'],
    ['skin.html#acne-scars', 'services/acne-scars-treatment.html'],
    ['skin.html#pigmentation-melasma', 'services/pigmentation-treatment.html'],
    ['skin.html#anti-aging', 'services/anti-aging-treatment.html'],
    ['skin.html#chemical-peels', 'services/chemical-peels.html'],
    ['skin.html#laser-toning', 'services/laser-toning.html'],
    ['skin.html#medi-facial', 'services/medi-facial.html'],
    ['skin.html#skin-brightening', 'services/skin-brightening.html'],
    ['skin.html#psoriasis', 'services/psoriasis-treatment.html'],
    ['skin.html#fungal-infection', 'services/fungal-skin-infection.html'],
    ['skin.html#skin-allergy', 'services/skin-allergy.html'],
    ['skin.html#dark-circles', 'services/dark-circles.html'],
    ['skin.html#warts-moles', 'services/warts-moles.html'],
    ['skin.html#vitiligo', 'services/vitiligo-treatment.html'],
    ['skin.html#tattoo-removal', 'services/tattoo-removal.html'],
    ['skin.html#laser-hair-removal', 'services/laser-hair-removal.html'],
    ['skin.html#botox-fillers', 'services/botox-fillers.html'],
    ['skin.html#glutathione', 'services/glutathione-antioxidants.html'],

    // Hair
    ['hair.html#hair-fall', 'services/hair-fall-treatment.html'],
    ['hair.html#prp-hair', 'services/prp-hair-treatment.html'],
    ['hair.html#gfc-therapy', 'services/gfc-hair-therapy.html'],
    ['hair.html#hair-transplant', 'services/hair-transplant.html'],
    ['hair.html#dandruff-scalp', 'services/dandruff-scalp-treatment.html'],
    ['hair.html#alopecia', 'services/alopecia-treatment.html'],
    ['hair.html#mesotherapy', 'services/mesotherapy-hair.html'],
    ['hair.html#hair-thinning', 'services/hair-thinning-treatment.html'],
    ['hair.html#stem-cells', 'services/stem-cells-hair.html'],
    ['hair.html#laser-hair', 'services/laser-therapy-hair.html'],

    // Nail
    ['nail.html#nail-fungus', 'services/nail-fungus-treatment.html'],
    ['nail.html#ingrown-nail', 'services/ingrown-nail-treatment.html'],
    ['nail.html#nail-disorders', 'services/nail-disorders-check.html']
];

const filesToUpdate = [
    'index.html',
    'about.html',
    'skin.html',
    'hair.html',
    'nail.html',
    'services.html',
    'contact.html'
];

const rootDir = path.resolve(__dirname, '..');

filesToUpdate.forEach(file => {
    const fullPath = path.join(rootDir, file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    let replacedCount = 0;

    mappings.forEach(([oldLink, newLink]) => {
        if (content.includes(oldLink)) {
            const regex = new RegExp(oldLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            content = content.replace(regex, newLink);
            replacedCount++;
        }
    });

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file} (${replacedCount} link types mapped)`);
});
