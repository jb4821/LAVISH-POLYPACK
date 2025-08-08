export const products = [
  {
    id: 'pp-woven-fabric-roll',
    name: 'PP Woven Fabric Roll',
    bestSeller: true,
    image: '/products/pp-woven-fabric-roll.jpeg', 
    description: 'PP Woven Fabric Rolls are made from 100% virgin polypropylene and are available in circular (tubular) or flat (loomcut) types. They are highly customizable for width, GSM, color, weave, and more, making them ideal for bag manufacturing, wrapping, pallet covering, and ground sheeting.',
    category: 'Industrial Packaging',
    specifications: {
      material: '100% Virgin Polypropylene (PP)',
      fabricType: 'Circular (Tubular) / Flat (Loomcut)',
      widthRange: 'Circular: 30 cm to 150 cm, Flat: 60 cm to 300 cm',
      gsm: '55 GSM to 140 GSM (Customizable)',
      colorOptions: 'Natural White / Transparent / Milky / As per customer requirement',
      weaveType: 'Leno / Plain / Matt / Tear-resistant',
      uvStabilization: 'Optional (As per outdoor storage requirement)',
      rollLength: '100 m to 5000 m (Custom as per order)',
      lamination: 'Without Lamination / With BOPP or LDPE Coating (Single or Double Side)',
      printing: 'Optional Flexographic Printing (Single or Multicolor)',
      packing: 'Rolls packed with HDPE/PP sheet or Stretch Film',
      usage: 'Bag manufacturing, Wrapping material, Pallet covering, Ground sheeting'
    },
    applications: [
      'Bag manufacturing',
      'Wrapping material',
      'Pallet covering',
      'Ground sheeting',
      'Industrial packaging',
      'Agricultural covering',
      'Construction use'
    ],
    technicalDetails: {
      material: '100% Virgin Polypropylene (PP)',
      fabricType: 'Circular / Flat',
      gsm: '55-140 GSM',
      width: '30-300 cm',
      color: 'Customizable',
      uvStabilization: 'Optional',
      lamination: 'Optional',
      printing: 'Flexographic (Single/Multicolor)',
      packing: 'Rolls with HDPE/PP sheet or Stretch Film'
    },
    advantages: [
      'Highly customizable for size, color, and GSM',
      'Strong and tear-resistant',
      'Suitable for indoor and outdoor use',
      'Optional UV stabilization for outdoor storage',
      'Available with or without lamination',
      'Ideal for a wide range of industrial and agricultural applications'
    ],
    longDescription: 'PP Woven Fabric Rolls are versatile and durable, suitable for a variety of industrial, agricultural, and construction applications. They can be tailored to meet specific requirements for strength, color, and protection, ensuring reliable performance in demanding environments.'
  },
  {
    id: 'anti-slip-bag',
    name: 'Anti Slip Bag',
    image: '/products/anti.jpeg',
    description: 'Designed with a textured or coated surface, PP Woven Anti-Slip Bags offer enhanced stacking stability, preventing slippage during transportation or storage. The special anti-skid coating reduces shifting on pallets, making these bags ideal for cement, grains, fertilizers, and other bulk materials.',
    category: 'Specialty Packaging',
    specifications: {
      material: 'PP Woven with Anti-Skid Coating',
      surfaceTexture: 'Ribbed / Textured for grip',
      coating: 'Single Side or Double Side',
      bagStrength: 'High Tear & Load Resistance',
      printType: 'Flexo or Screen',
      useCase: 'Cement, Grains, Heavy Bulk',
      sizeRange: '25-50 kg',
      uvProtection: 'Optional'
    },
    applications: [
      'Cement packaging',
      'Grains storage',
      'Heavy bulk materials',
      'Fertilizers',
      'Industrial packaging',
      'Logistics and transportation',
      'Pallet stacking',
      'Warehouse storage'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'Anti-Skid Coating',
      printing: 'Flexo or Screen',
      uvProtection: 'Optional'
    },
    advantages: [
      'Enhanced stacking stability',
      'Prevents slippage during transportation or storage',
      'Special anti-skid coating reduces shifting on pallets',
      'Heavy-duty strength combined with safety-focused surface treatment',
      'High tear and load resistance',
      'Textured surface for better grip',
      'Single side or double side coating options',
      'Optional UV protection available',
      'Ideal for logistics and industrial packaging',
      'Preferred choice for bulk material handling'
    ],
    longDescription: 'Their heavy-duty strength combined with safety-focused surface treatment makes them a preferred choice in logistics and industrial packaging.'
  },
  {
    id: 'sugar-bag',
    name: 'Sugar Bag',
    image: '/products/sugar.jpeg',
    description: 'Made from food-grade polypropylene, PP Woven Sugar Bags ensure safe and hygienic packaging for refined and raw sugar. These bags may come with or without liners and are optimized to protect contents from moisture and contamination.',
    category: 'Food Packaging',
    specifications: {
      material: 'Food Grade PP Woven',
      liner: 'Optional',
      printing: 'Up to 3 Colors Flexo',
      moistureProtection: 'Medium to High',
      sizeRange: '25-50 kg',
      commonUse: 'White / Raw Sugar'
    },
    applications: [
      'White sugar packaging',
      'Raw sugar packaging',
      'Refined sugar',
      'Food products',
      'Hygienic packaging',
      'Retail packaging',
      'Bulk sugar storage',
      'Export packaging'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'Food Grade PP Woven',
      coating: 'Optional Liner',
      printing: 'Up to 3 Colors Flexo',
      moistureProtection: 'Medium to High'
    },
    advantages: [
      'Made from food-grade polypropylene for safe packaging',
      'Safe and hygienic packaging for refined and raw sugar',
      'Optional liners for enhanced protection',
      'Optimized to protect contents from moisture and contamination',
      'Excellent printability for branding',
      'Strong stitching ensures secure closure and handling',
      'Suitable for long-distance transportation',
      'Medium to high moisture protection',
      'Up to 3 colors flexo printing available',
      'Wide size range from 25-50 kg',
      'Ideal for white and raw sugar packaging',
      'Food-grade material ensures product safety'
    ],
    longDescription: 'They offer excellent printability for branding, while strong stitching ensures secure closure and handling across long distances.'
  },
  {
    id: 'transparent-bag',
    name: 'Transparent Bag',
    image: '/products/transparent.jpeg',
    description: 'PP Woven Transparent Bags are made from clear woven polypropylene, allowing product visibility without compromising strength. Ideal for grains, seeds, plastics, and similar items, these bags combine transparency with robust protection.',
    category: 'Premium Packaging',
    specifications: {
      material: 'Crystal Clear PP Woven',
      transparency: 'Full / Partial (with Strip)',
      print: 'Optional (Minimum Print)',
      lamination: 'Not required',
      sizeRange: '5-50 kg',
      bestFor: 'Grains, Seeds, Plastic Granules'
    },
    applications: [
      'Grains',
      'Seeds',
      'Plastic Granules',
      'Food products',
      'Retail display',
      'Quality inspection',
      'Premium packaging',
      'Branded retail packaging'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'Crystal Clear PP Woven',
      coating: 'None (Transparent)',
      printing: 'Optional (Minimum Print)',
      transparency: 'Full / Partial (with Strip)'
    },
    advantages: [
      'Product visibility without compromising strength',
      'Combines transparency with robust protection',
      'Optional printing and custom sizing',
      'Perfect for branded retail packaging',
      'Functional benefits like ventilation and durability',
      'Crystal clear material for maximum visibility',
      'Full or partial transparency options',
      'No lamination required',
      'Minimum print option available',
      'Wide size range from 5-50 kg',
      'Ideal for quality inspection and retail display'
    ],
    longDescription: 'Optional printing and custom sizing make them perfect for branded retail packaging while offering functional benefits like ventilation and durability.'
  },
  {
    id: 'bopp-laminated-bag',
    name: 'BOPP Laminated Bag',
    image: '/products/bopp.jpeg',
    description: 'BOPP (Biaxially Oriented Polypropylene) Laminated Bags are an advanced and high-performance packaging solution designed for strength, durability, and visual appeal. These bags are crafted by laminating a printed BOPP film over a woven polypropylene fabric, offering the perfect combination of toughness and premium branding. With multicolor rotogravure printing, they allow detailed graphics, logos, and vibrant designs, making them ideal for retail and bulk packaging.',
    category: 'Premium Packaging',
    specifications: {
      material: 'Polypropylene (PP) Woven Fabric + BOPP Film',
      bagType: 'Laminated, Multicolor Printed',
      printingType: 'Rotogravure / Flexographic (up to 8 colors)',
      surfaceFinish: 'Glossy / Matte / Metallic',
      sizeRange: 'Width: 12" – 26" (customizable)',
      lengthRange: 'As per customer requirement',
      gsm: '60 – 140 GSM (depending on bag usage)',
      capacity: '5 kg to 50 kg',
      sealingType: 'Stitching / Ultrasonic Sealing / Bottom Folded',
      liner: 'Available with internal liners if required',
      uvProtection: 'Available (3 to 6 months)',
      handleType: 'With D-cut / Without handle / Attached handle',
      designBranding: 'Custom logo, brand, and artwork printing'
    },
    applications: [
      'Animal Feed',
      'Seeds',
      'Fertilizer',
      'Flour',
      'Pet Food',
      'Grains',
      'Cement',
      'Sugar',
      'Chemicals',
      'Retail Packaging'
    ],
    technicalDetails: {
      gsm: '60 – 140 GSM',
      denier: 'Customizable',
      weave: 'PP Woven + BOPP Film',
      coating: 'BOPP Lamination',
      printing: 'Up to 8 colors',
      uvProtection: '3 to 6 months'
    },
    advantages: [
      'Advanced and high-performance packaging solution',
      'Perfect combination of toughness and premium branding',
      'Multicolor rotogravure printing for detailed graphics',
      'Excellent resistance against moisture and UV rays',
      'Customizable in size, finish, and print',
      'Ideal for retail and bulk packaging',
      'Reflects brand quality and reliability',
      'Wide range of applications across industries'
    ],
    longDescription: 'Widely used in sectors like agriculture, animal feed, fertilizer, pet food, cement, seeds, and chemicals, BOPP laminated bags provide excellent resistance against moisture, UV rays, and handling damage. They are customizable in size, finish (glossy or matte), and print, making them a preferred choice for companies that want their packaging to reflect brand quality and reliability.'
  },
  {
    id: 'w-cut-bag',
    name: 'W Cut Bag',
    image: '/products/w-cut.jpeg',
    description: 'PP Woven W-Cut Bags are strong, reusable shopping bags with a soft, seamless handle cut in a "W" shape. Ideal for retail, grocery, and promotional use, they offer an eco-friendly alternative to plastic carry bags.',
    category: 'Retail Packaging',
    specifications: {
      material: 'PP Non-Woven / Woven',
      handle: 'Ultrasonically Sealed W-Cut',
      gsm: '60-100 GSM',
      printType: 'Screen / Flexo',
      sizeRange: '12"x16", 14"x18", Custom',
      use: 'Grocery, Promotions, Daily Use'
    },
    applications: [
      'Grocery shopping',
      'Promotional use',
      'Daily consumer use',
      'Retail packaging',
      'Shopping bags',
      'Eco-friendly alternatives',
      'Consumer goods',
      'Retail display'
    ],
    technicalDetails: {
      gsm: '60-100 GSM',
      denier: 'Customizable',
      weave: 'PP Non-Woven / Woven',
      coating: 'None',
      printing: 'Screen / Flexo',
      handleType: 'Ultrasonically Sealed W-Cut'
    },
    advantages: [
      'Strong, reusable shopping bags',
      'Soft, seamless handle cut in "W" shape',
      'Ideal for retail, grocery, and promotional use',
      'Eco-friendly alternative to plastic carry bags',
      'Lightweight and printable',
      'Stylish and practical for daily consumer use',
      'Ultrasonically sealed W-cut handles',
      'Available in PP Non-Woven or Woven materials',
      'Screen or flexo printing options',
      'Standard sizes: 12"x16", 14"x18", or custom',
      '60-100 GSM for optimal strength and flexibility',
      'Perfect for grocery and promotional applications'
    ],
    longDescription: 'Lightweight and printable, W-Cut bags are both stylish and practical for daily consumer use.'
  },
  {
    id: 'cattlefeed-bag',
    name: 'Cattlefeed Bag',
    image: '/products/cattlefield.jpeg',
    description: 'PP Woven Cattle Feed Bags are designed for packaging animal feed, including poultry, cattle, and fish feed. With vibrant printing and lamination options, these bags not only protect the feed but also support brand visibility in retail environments.',
    category: 'Agricultural Packaging',
    specifications: {
      material: 'PP Woven + BOPP (Optional)',
      print: 'Multicolor BOPP',
      structure: 'Tubular with Stitched Bottom',
      sizeRange: '5-50 kg',
      application: 'Animal Feed, Poultry Feed, Fish Feed'
    },
    applications: [
      'Animal feed packaging',
      'Poultry feed packaging',
      'Fish feed packaging',
      'Cattle feed',
      'Pet food packaging',
      'Agricultural sector',
      'Retail environments',
      'Bulk feed storage'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'BOPP (Optional)',
      printing: 'Multicolor BOPP',
      structure: 'Tubular with Stitched Bottom'
    },
    advantages: [
      'Designed for packaging animal feed, poultry, cattle, and fish feed',
      'Vibrant printing and lamination options',
      'Protect the feed while supporting brand visibility',
      'Superior barrier properties and robust structure',
      'Ideal for rough handling and long storage durations',
      'Multicolor BOPP printing for attractive branding',
      'Optional BOPP lamination for enhanced protection',
      'Tubular structure with stitched bottom for durability',
      'Wide size range from 5-50 kg',
      'Suitable for retail environments',
      'Excellent for bulk feed storage',
      'Strong construction for animal feed packaging'
    ],
    longDescription: 'Their superior barrier properties and robust structure make them ideal for rough handling and long storage durations.'
  },
  {
    id: 'salt-bag',
    name: 'Salt Bag',
    image: '/products/salt.jpeg',
    description: 'PP Woven Salt Bags are moisture-resistant, durable, and food-safe — ideal for packaging edible or industrial salt. Available with liners or lamination, these bags ensure salt remains dry and clump-free.',
    category: 'Food Packaging',
    specifications: {
      material: 'PP Woven Fabric with Liner Optional',
      printType: 'Flexo (1-3 Colors)',
      moistureBarrier: 'Yes (High)',
      sizeRange: '1-50 kg',
      applicationType: 'Edible / Industrial Salt'
    },
    applications: [
      'Edible salt packaging',
      'Industrial salt packaging',
      'Food products',
      'Domestic packaging',
      'Export packaging',
      'Granular products',
      'Bulk storage'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'Optional Liner',
      printing: 'Flexo (1-3 Colors)',
      moistureBarrier: 'High'
    },
    advantages: [
      'Moisture-resistant, durable, and food-safe',
      'Ideal for packaging edible or industrial salt',
      'Available with liners or lamination',
      'Ensures salt remains dry and clump-free',
      'Flexographic printing and tight stitching',
      'Clean, professional finish',
      'Suitable for domestic and export packaging',
      'High moisture barrier protection',
      'Flexo printing with 1-3 colors available',
      'Wide size range from 1-50 kg',
      'Optional liner for enhanced protection',
      'Food-grade material for safe packaging'
    ],
    longDescription: 'Flexographic printing and tight stitching provide a clean, professional finish for both domestic and export packaging.'
  },
  {
    id: 'plain-bag',
    name: 'Plain Bag',
    image: '/products/plain.jpeg',
    description: 'Plain PP (Polypropylene) Woven Bags are one of the most reliable and cost-effective packaging solutions used across various industries. Manufactured using high-quality woven polypropylene fabric, these bags offer excellent strength, flexibility, and durability, making them ideal for bulk packaging of agricultural products, chemicals, cement, food grains, and more.',
    category: 'Basic Packaging',
    specifications: {
      material: 'Virgin Polypropylene (PP) Woven Fabric',
      bagType: 'Unlaminated / Plain',
      gsm: '40 to 140 GSM (customizable)',
      width: '30 cm - 122 cm (12" - 48")',
      length: 'As per requirement',
      weaveType: '8 x 8 to 12 x 12 (standard & custom available)',
      color: 'White / Natural / As requested',
      printing: 'Single or double side printing (optional)',
      sealingType: 'Bottom stitched or hemmed',
      linerOption: 'Available with or without inner PE liner',
      uvProtection: 'Available (3-6 months outdoor exposure)',
      packaging: 'Bale or pallet packing with strapping',
      capacity: '5 kg - 50 kg (custom as per application)'
    },
    applications: [
      'Agricultural products',
      'Chemicals',
      'Cement',
      'Food grains',
      'Bulk packaging',
      'Storage',
      'Export',
      'Domestic distribution'
    ],
    technicalDetails: {
      gsm: '40 to 140 GSM',
      denier: 'Customizable',
      weave: '8 x 8 to 12 x 12',
      coating: 'None (Plain)',
      printing: 'Optional single or double side',
      uvProtection: '3-6 months outdoor exposure'
    },
    advantages: [
      'Most reliable and cost-effective packaging solution',
      'Excellent strength, flexibility, and durability',
      'Lightweight nature reduces shipping costs',
      'Superior load-bearing capacity',
      'Customizable sizes and specifications',
      'UV protection options available',
      'Ability to include inner liners',
      'Protects contents from moisture, dust, and damage',
      'Practical, eco-friendly, and economical choice',
      'Suitable for storage, export, and domestic distribution'
    ],
    longDescription: 'Their lightweight nature reduces shipping costs while maintaining superior load-bearing capacity. With customizable sizes, UV protection options, and the ability to include inner liners, plain PP woven bags are engineered to protect contents from moisture, dust, and damage during handling and transport. Whether used for storage, export, or domestic distribution, these bags serve as a practical, eco-friendly, and economical packaging choice for businesses across the globe.'
  },
  {
    id: 'cement-bag',
    name: 'Cement Bag',
    image: '/products/cement.jpeg',
    description: 'PP Woven Cement Bags are designed to handle the heavy-duty requirements of cement packaging. These bags offer high tensile strength, moisture resistance, and anti-slip properties. Available in open-mouth or valve-type variants, they are compatible with both manual and automatic filling systems.',
    category: 'Construction Packaging',
    specifications: {
      material: 'Coated / Laminated PP Woven',
      valveOrOpenMouth: 'Both Available',
      antiSlipCoating: 'Optional',
      sizeRange: '25-50 kg',
      burstingStrength: 'High (Customized)',
      usage: 'Cement, Lime, Gypsum'
    },
    applications: [
      'Cement packaging',
      'Lime packaging',
      'Gypsum packaging',
      'Construction materials',
      'Building materials',
      'Industrial packaging',
      'Heavy-duty applications',
      'Construction industry'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'Coated / Laminated',
      printing: 'Available',
      burstingStrength: 'High (Customized)'
    },
    advantages: [
      'Designed for heavy-duty cement packaging requirements',
      'High tensile strength and moisture resistance',
      'Anti-slip properties for better handling',
      'Available in open-mouth or valve-type variants',
      'Compatible with both manual and automatic filling systems',
      'Built to withstand tough handling conditions',
      'Protects cement and construction materials during transportation and storage',
      'High bursting strength with customized options',
      'Optional anti-slip coating available',
      'Coated or laminated material options',
      'Wide size range from 25-50 kg',
      'Ideal for construction industry applications'
    ],
    longDescription: 'Built to withstand tough handling conditions, these bags protect cement and other construction materials during transportation and storage.'
  },
  {
    id: 'gusseted-bag',
    name: 'Gusseted Bag',
    image: '/products/guested.jpeg',
    description: 'PP Woven Gusseted Bags are specially designed to maximize storage space and improve stacking efficiency. With gussets on either side or at the bottom, these bags expand to accommodate more volume, making them ideal for bulky or irregularly shaped products.',
    category: 'Premium Packaging',
    specifications: {
      material: 'Polypropylene (PP) Woven Fabric',
      gussetType: 'Side Gusset / Bottom Gusset',
      coating: 'Optional (Glossy / Matte)',
      lamination: 'BOPP Lamination Optional',
      printType: 'Flexographic / Rotogravure',
      bagWeightCapacity: '5 kg to 50 kg',
      uvProtection: 'Optional (200-1600 hours)',
      closureOptions: 'Heat Cut, Hemmed Top, Stitched Bottom',
      usage: 'Grains, Fertilizers, Sugar, Pulses'
    },
    applications: [
      'Grains',
      'Fertilizers',
      'Sugar',
      'Pulses',
      'Agriculture',
      'Food packaging',
      'Industrial applications',
      'Bulky products',
      'Irregularly shaped products'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'Optional Glossy / Matte',
      lamination: 'BOPP Optional',
      printing: 'Flexographic / Rotogravure',
      uvProtection: '200-1600 hours'
    },
    advantages: [
      'Maximizes storage space',
      'Improves stacking efficiency',
      'Expands to accommodate more volume',
      'Ideal for bulky or irregularly shaped products',
      'Strong woven structure ensures durability',
      'Excellent load-bearing capacity',
      'UV protection options available',
      'Lamination options for enhanced protection',
      'Custom printing capabilities',
      'Meets industry-specific needs',
      'Efficient and cost-effective packaging solution',
      'Suitable for agriculture, food packaging, and industrial applications'
    ],
    longDescription: 'Their strong woven structure ensures durability and load-bearing capacity, while options like UV protection, lamination, and custom printing allow these bags to meet industry-specific needs. Commonly used in agriculture, food packaging, and industrial applications, gusseted bags offer an efficient and cost-effective packaging solution.'
  },
  {
    id: 'd-cut-bag',
    name: 'D Cut Bag',
    image: '/products/d-cut.jpeg',
    description: 'PP Woven D-Cut Bags feature a die-cut handle, giving them a sleek, premium look for retail and fashion packaging. Available in laminated glossy or matte finishes, they support bold brand printing and offer excellent durability for repeat use.',
    category: 'Retail Packaging',
    specifications: {
      material: 'Laminated / Non-Laminated PP Woven',
      handle: 'Die Cut D-Handle',
      finish: 'Glossy / Matte Laminated',
      printType: 'Multicolor / CMYK',
      sizes: '12"x16", 14"x20", Custom',
      useCase: 'Retail, Fashion, Branding'
    },
    applications: [
      'Retail packaging',
      'Fashion packaging',
      'Branding applications',
      'Promotional packaging',
      'Luxury packaging',
      'Shopping bags',
      'Premium retail',
      'Fashion industry'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'Glossy / Matte Laminated',
      printing: 'Multicolor / CMYK',
      handleType: 'Die Cut D-Handle'
    },
    advantages: [
      'Die-cut handle for sleek, premium look',
      'Ideal for retail and fashion packaging',
      'Available in laminated glossy or matte finishes',
      'Support bold brand printing',
      'Excellent durability for repeat use',
      'Combine functionality with aesthetics',
      'Preferred choice for promotional and luxury packaging',
      'Laminated or non-laminated material options',
      'Multicolor / CMYK printing capabilities',
      'Standard sizes: 12"x16", 14"x20", or custom',
      'Premium finish options for enhanced appearance',
      'Perfect for fashion and retail applications'
    ],
    longDescription: 'These bags combine functionality with aesthetics, making them a preferred choice for promotional and luxury packaging.'
  },
  {
    id: 'fertilizer-bag',
    name: 'Fertilizer Bag',
    image: '/products/fertilizer.jpeg',
    description: 'PP Woven Fertilizer Bags are tailored to withstand the reactive nature of fertilizers. They can be customized with liners, UV protection, lamination, and multicolor BOPP prints for premium branding. These bags prevent leakage, provide durability, and allow for secure handling.',
    category: 'Agricultural Packaging',
    specifications: {
      material: 'Woven PP with or without BOPP',
      printing: 'Flexo or BOPP Rotogravure (Full Color)',
      coating: 'Optional',
      liner: 'Optional',
      sizeRange: '10-50 kg',
      usage: 'Urea, DAP, Organic Fertilizers'
    },
    applications: [
      'Urea packaging',
      'DAP packaging',
      'Organic fertilizers',
      'Agricultural sector',
      'Farming industry',
      'Chemical fertilizers',
      'Bulk storage',
      'Agricultural chemicals'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'Woven PP',
      coating: 'Optional',
      printing: 'Flexo or BOPP Rotogravure (Full Color)',
      liner: 'Optional'
    },
    advantages: [
      'Tailored to withstand the reactive nature of fertilizers',
      'Customizable with liners, UV protection, and lamination',
      'Multicolor BOPP prints for premium branding',
      'Prevent leakage and provide durability',
      'Allow for secure handling',
      'Widely used in the agricultural sector',
      'Excellent resistance to tearing and chemical damage',
      'Flexo or BOPP rotogravure printing options',
      'Optional coating and liner options',
      'Wide size range from 10-50 kg',
      'Suitable for urea, DAP, and organic fertilizers',
      'Chemical-resistant material for fertilizer packaging'
    ],
    longDescription: 'Widely used in the agricultural sector, they offer excellent resistance to tearing and chemical damage.'
  },
  {
    id: 'valve-type-bag',
    name: 'Valve Type Bag',
    image: '/products/valve.jpeg',
    description: 'PP Woven Valve Type Bags are innovative packaging solutions commonly used in automated filling systems. These bags feature a valve opening that enables fast filling without the need for manual sealing. Once filled, the valve automatically seals under pressure, ensuring spill-proof storage.',
    category: 'Specialty Packaging',
    specifications: {
      material: 'PP Woven with Valve Inlet',
      valvePosition: 'Center or Corner',
      lamination: 'Optional',
      filling: 'Manual or Automatic Machine Compatible',
      capacity: '25-50 kg',
      sealType: 'Self-Sealing / Hot Air Welded',
      usage: 'Cement, Dry Mix, Construction Chemicals'
    },
    applications: [
      'Cement',
      'Dry Mix',
      'Construction Chemicals',
      'Building materials',
      'Chemical industries',
      'Fine powders',
      'Granular products',
      'Automated filling systems'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'Optional Lamination',
      printing: 'Available',
      valveMechanism: 'Automatic self-sealing'
    },
    advantages: [
      'Fast filling without manual sealing',
      'Valve automatically seals under pressure',
      'Spill-proof storage',
      'Manual or automatic machine compatible',
      'Improved operational efficiency',
      'Reduced product loss',
      'Durable and strong woven structure',
      'Center or corner valve positioning options',
      'Optional lamination for enhanced protection',
      'Self-sealing or hot air welded options',
      'Ideal for automated filling systems'
    ],
    longDescription: 'Often used in cement, building materials, and chemical industries, valve-type bags improve operational efficiency and reduce product loss.'
  },
  {
    id: 'liner-inserted-bag',
    name: 'Liner Inserted Bag',
    image: '/products/linear.jpeg',
    description: 'PP Woven Liner Inserted Bags feature an inner liner of LDPE or LLDPE, providing superior protection against moisture, air, and contamination. These bags are particularly suitable for packaging fine powders, chemicals, sugar, flour, and other materials that require a secure, leak-proof environment.',
    category: 'Premium Packaging',
    specifications: {
      material: 'PP Woven with LDPE/LLDPE Inner Liner',
      linerThickness: '25-60 Microns',
      bagShape: 'Tubular or Flat',
      printType: 'Up to 3 Colors (Flexo)',
      sizeRange: 'Custom',
      closure: 'Bottom Stitched / Top Open / Hemmed',
      moistureBarrier: 'High - due to inner liner'
    },
    applications: [
      'Fine powders',
      'Chemicals',
      'Sugar',
      'Flour',
      'Spices',
      'Moisture-sensitive materials',
      'Hygienic packaging',
      'Food products'
    ],
    technicalDetails: {
      gsm: 'Customizable',
      denier: 'Customizable',
      weave: 'PP Woven',
      coating: 'LDPE/LLDPE Liner',
      printing: 'Up to 3 Colors (Flexo)',
      linerThickness: '25-60 Microns'
    },
    advantages: [
      'Superior protection against moisture, air, and contamination',
      'Suitable for fine powders and sensitive materials',
      'Secure and leak-proof environment',
      'Inner liner can be loose or bottom-sealed and stitched',
      'Ideal for hygienic packaging',
      'Ensures safe storage and transport',
      'High moisture barrier due to inner liner',
      'Customizable size range',
      'Multiple closure options available',
      'Enhanced product protection for sensitive materials'
    ],
    longDescription: 'The inner liner can be loose or bottom-sealed and stitched into the outer woven layer. Ideal for hygienic and moisture-sensitive packaging, these bags ensure your products are stored and transported safely.'
  },
  {
    id: 'fibc-jumbo-bag',
    name: 'FIBC/Jumbo Bag',
    image: '/products/jumbo.jpeg',
    description: 'FIBC Bags, also known as Jumbo Bags or Bulk Bags, are an efficient and economical solution for the storage and transportation of dry, flowable bulk materials. Manufactured from high-strength woven polypropylene, these bags are designed to carry loads ranging from 500 kg to 2000 kg with excellent safety assurance.',
    category: 'Industrial Packaging',
    specifications: {
      material: '100% Virgin Polypropylene (PP)',
      bagTypes: 'U-Panel, Circular, 4-Panel, Baffle (Q Bags), Conductive Bags (Type B, C, D)',
      fabric: 'Coated / Uncoated / Anti-static / UV Stabilized',
      dimensions: 'Customized: 90x90x90 cm to 120x120x200 cm',
      safeWorkingLoad: '500 kg to 2000 kg',
      safetyFactor: '5:1 or 6:1 (as per ISO 21898 Standard)',
      liftingOptions: 'Cross Corner Loops / Side Seam Loops / Sleeve Lift / Stevedore Straps',
      topOptions: 'Open Top / Duffle Top / Spout Top / Cone Top',
      bottomOptions: 'Flat Bottom / Discharge Spout / Duffle Bottom / Conical Bottom',
      linerOption: 'With or Without PE Liner (Gusseted / Tubular / Form-Fit)',
      printing: 'Up to 3 Colors on 2 Sides (Flexographic Printing)',
      dustproofSeams: 'Optional: Single, Double or Triple Stitched with filler cord',
      certifications: 'ISO 9001:2015 / ISO 21898 / UN Certified (on request)',
      usage: 'Bulk storage and transport of Cement, Fertilizer, Grain, Sand, Chemicals'
    },
    applications: [
      'Bulk storage and transport',
      'Cement packaging',
      'Fertilizer packaging',
      'Grain storage',
      'Sand packaging',
      'Chemical storage',
      'Construction materials',
      'Industrial applications',
      'Hazardous materials (UN certified)',
      'Agricultural products'
    ],
    technicalDetails: {
      material: '100% Virgin Polypropylene (PP)',
      fabricTypes: 'Coated / Uncoated / Anti-static / UV Stabilized',
      safetyFactor: '5:1 or 6:1 (ISO 21898 Standard)',
      printing: 'Up to 3 Colors on 2 Sides (Flexographic)',
      certifications: 'ISO 9001:2015 / ISO 21898 / UN Certified'
    },
    advantages: [
      'Efficient and economical solution for bulk materials',
      'High-strength woven polypropylene construction',
      'Load capacity from 500 kg to 2000 kg',
      'Excellent safety assurance with 5:1 or 6:1 safety factor',
      'Available in U-Panel, Circular, Baffle, and 4-Panel designs',
      'Maximize load stability and stacking efficiency',
      'Customizable filling and discharge options',
      'Superior performance, durability, and reusability',
      'UV protection and anti-static fabric options',
      'Dustproof stitching for enhanced protection',
      'Meet international quality and safety standards',
      'UN-certified options for hazardous materials',
      'Global compliance and customer trust',
      'Multiple lifting and discharge options',
      'Flexible liner options for various applications'
    ],
    longDescription: 'They are available in various configurations such as U-Panel, Circular, Baffle (Q bags), and 4-Panel designs, each tailored to maximize load stability, stacking efficiency, and cost-effectiveness. FIBC bags can be customized with different filling and discharge options, including spouts, duffle tops, and liners, depending on the application. Whether for fertilizers, cement, food grains, chemicals, or construction materials, these bags offer superior performance, durability, and reusability. With options for UV protection, anti-static fabric, and dustproof stitching, our FIBC bags meet international quality and safety standards like ISO 21898. At Lavish Polypack, we also offer UN-certified FIBC bags for hazardous materials, ensuring global compliance and customer trust.'
  }
];

// Product categories for filtering
export const productCategories = [
  'All',
  'Food Packaging',
  'Agricultural Packaging',
  'Construction Packaging',
  'Industrial Packaging',
  'Retail Packaging',
  'Premium Packaging',
  'Specialty Packaging',
  'Basic Packaging'
];

// Technical specifications reference
export const technicalSpecs = {
  materials: ['PP Woven Fabric', 'BOPP Laminated', 'Transparent PP', 'Heavy PP Woven', 'Non-woven'],
  weights: ['50-100 grams', '80-150 grams', '100-200 grams', '150-300 grams', '200-400 grams', '250-500 grams', '300-600 grams'],
  sizes: ['Customizable', 'Standard sizes', 'Large capacity', 'Gusseted design', 'Valve design', 'Liner design'],
  features: ['Moisture resistant', 'Anti-slip coating', 'Transparent material', 'Heavy duty', 'Food grade', 'Chemical resistant', 'Custom printing']
};
