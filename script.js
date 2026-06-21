/* ================================
   🥗 تطبيق تغذيتي - JavaScript المطور
   وضع بناء عضلي + ماكروز + حاسبة بروتين + مكملات
   ================================ */

// ==================== قاعدة البيانات الموسعة ====================
const APP_DATABASE = {
    ingredients: {
        proteins: [
            { id: 'p1', name: 'دجاج', emoji: '🍗', caloriesPer100g: 165, protein: 31, carbs: 0, fat: 3.6 },
            { id: 'p2', name: 'لحم غنم', emoji: '🥩', caloriesPer100g: 250, protein: 26, carbs: 0, fat: 17 },
            { id: 'p3', name: 'لحم بقر', emoji: '🥩', caloriesPer100g: 220, protein: 28, carbs: 0, fat: 12 },
            { id: 'p4', name: 'سمك', emoji: '🐟', caloriesPer100g: 120, protein: 22, carbs: 0, fat: 3 },
            { id: 'p5', name: 'ربيان', emoji: '🦐', caloriesPer100g: 99, protein: 24, carbs: 0.2, fat: 0.3 },
            { id: 'p6', name: 'بيض', emoji: '🥚', caloriesPer100g: 155, protein: 13, carbs: 1.1, fat: 11 },
            { id: 'p7', name: 'حمص', emoji: '🫘', caloriesPer100g: 164, protein: 9, carbs: 27, fat: 2.6 },
            { id: 'p8', name: 'فول', emoji: '🫘', caloriesPer100g: 140, protein: 9, carbs: 21, fat: 0.6 },
            { id: 'p9', name: 'عدس', emoji: '🫘', caloriesPer100g: 116, protein: 9, carbs: 20, fat: 0.4 },
            { id: 'p10', name: 'تونة', emoji: '🐟', caloriesPer100g: 130, protein: 29, carbs: 0, fat: 1 },
            { id: 'p11', name: 'سلمون', emoji: '🐟', caloriesPer100g: 208, protein: 20, carbs: 0, fat: 13 },
            { id: 'p12', name: 'جمبري', emoji: '🦐', caloriesPer100g: 85, protein: 20, carbs: 0, fat: 0.5 },
            { id: 'p13', name: 'لحم مفروم', emoji: '🥩', caloriesPer100g: 230, protein: 25, carbs: 0, fat: 15 },
            { id: 'p14', name: 'ديك رومي', emoji: '🦃', caloriesPer100g: 135, protein: 30, carbs: 0, fat: 1 },
            { id: 'p15', name: 'بط', emoji: '🦆', caloriesPer100g: 337, protein: 19, carbs: 0, fat: 28 },
            { id: 'p16', name: 'سجق', emoji: '🌭', caloriesPer100g: 300, protein: 12, carbs: 2, fat: 27 },
            { id: 'p17', name: 'بروتين نباتي', emoji: '🌱', caloriesPer100g: 120, protein: 15, carbs: 10, fat: 3 },
            { id: 'p18', name: 'توفو', emoji: '🧈', caloriesPer100g: 76, protein: 8, carbs: 1.9, fat: 4.8 },
            { id: 'p19', name: 'جبن قريش', emoji: '🧀', caloriesPer100g: 98, protein: 11, carbs: 3.4, fat: 4.3 },
            { id: 'p20', name: 'كبد', emoji: '🫁', caloriesPer100g: 135, protein: 20, carbs: 3.9, fat: 4.4 }
        ],
        carbs: [
            { id: 'c1', name: 'رز بسمتي', emoji: '🍚', caloriesPer100g: 350, protein: 8, carbs: 78, fat: 0.5 },
            { id: 'c2', name: 'رز مصري', emoji: '🍚', caloriesPer100g: 340, protein: 7, carbs: 77, fat: 0.4 },
            { id: 'c3', name: 'مكرونة', emoji: '🍝', caloriesPer100g: 370, protein: 13, carbs: 75, fat: 1.5 },
            { id: 'c4', name: 'خبز', emoji: '🍞', caloriesPer100g: 265, protein: 9, carbs: 49, fat: 3.2 },
            { id: 'c5', name: 'بطاطس', emoji: '🥔', caloriesPer100g: 77, protein: 2, carbs: 17, fat: 0.1 },
            { id: 'c6', name: 'برغل', emoji: '🌾', caloriesPer100g: 342, protein: 12, carbs: 76, fat: 1.3 },
            { id: 'c7', name: 'كينوا', emoji: '🌱', caloriesPer100g: 368, protein: 14, carbs: 64, fat: 6 },
            { id: 'c8', name: 'شوفان', emoji: '🌾', caloriesPer100g: 389, protein: 17, carbs: 66, fat: 7 },
            { id: 'c9', name: 'فريكة', emoji: '🌾', caloriesPer100g: 340, protein: 11, carbs: 72, fat: 1.5 },
            { id: 'c10', name: 'دقيق', emoji: '🌾', caloriesPer100g: 364, protein: 10, carbs: 76, fat: 1 },
            { id: 'c11', name: 'بطاطا حلوة', emoji: '🍠', caloriesPer100g: 86, protein: 1.6, carbs: 20, fat: 0.1 },
            { id: 'c12', name: 'ذرة', emoji: '🌽', caloriesPer100g: 365, protein: 9, carbs: 74, fat: 4.7 },
            { id: 'c13', name: 'عدس', emoji: '🫘', caloriesPer100g: 116, protein: 9, carbs: 20, fat: 0.4 },
            { id: 'c14', name: 'فاصوليا بيضاء', emoji: '🫘', caloriesPer100g: 140, protein: 9, carbs: 25, fat: 0.5 },
            { id: 'c15', name: 'حمص', emoji: '🫘', caloriesPer100g: 164, protein: 9, carbs: 27, fat: 2.6 }
        ],
        vegetables: [
            { id: 'v1', name: 'طماطم', emoji: '🍅', caloriesPer100g: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
            { id: 'v2', name: 'بصل', emoji: '🧅', caloriesPer100g: 40, protein: 1.1, carbs: 9.3, fat: 0.1 },
            { id: 'v3', name: 'فلفل أخضر', emoji: '🫑', caloriesPer100g: 20, protein: 0.9, carbs: 4.6, fat: 0.2 },
            { id: 'v4', name: 'فلفل أحمر', emoji: '🌶️', caloriesPer100g: 31, protein: 1, carbs: 6, fat: 0.3 },
            { id: 'v5', name: 'باذنجان', emoji: '🍆', caloriesPer100g: 25, protein: 1, carbs: 5.9, fat: 0.2 },
            { id: 'v6', name: 'كوسة', emoji: '🥒', caloriesPer100g: 17, protein: 1.2, carbs: 3.1, fat: 0.3 },
            { id: 'v7', name: 'جزر', emoji: '🥕', caloriesPer100g: 41, protein: 0.9, carbs: 10, fat: 0.2 },
            { id: 'v8', name: 'ثوم', emoji: '🧄', caloriesPer100g: 149, protein: 6.4, carbs: 33, fat: 0.5 },
            { id: 'v9', name: 'زنجبيل طازج', emoji: '🫚', caloriesPer100g: 80, protein: 1.8, carbs: 18, fat: 0.8 },
            { id: 'v10', name: 'خيار', emoji: '🥒', caloriesPer100g: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
            { id: 'v11', name: 'خس', emoji: '🥬', caloriesPer100g: 15, protein: 1.4, carbs: 2.9, fat: 0.2 },
            { id: 'v12', name: 'جرجير', emoji: '🥬', caloriesPer100g: 25, protein: 2.6, carbs: 3.7, fat: 0.7 },
            { id: 'v13', name: 'بقدونس', emoji: '🌿', caloriesPer100g: 36, protein: 3, carbs: 6.3, fat: 0.8 },
            { id: 'v14', name: 'كزبرة', emoji: '🌿', caloriesPer100g: 23, protein: 2.1, carbs: 3.7, fat: 0.5 },
            { id: 'v15', name: 'ليمون', emoji: '🍋', caloriesPer100g: 29, protein: 1.1, carbs: 9.3, fat: 0.3 },
            { id: 'v16', name: 'سبانخ', emoji: '🥬', caloriesPer100g: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
            { id: 'v17', name: 'بروكلي', emoji: '🥦', caloriesPer100g: 34, protein: 2.8, carbs: 6.6, fat: 0.4 },
            { id: 'v18', name: 'قرنبيط', emoji: '🥬', caloriesPer100g: 25, protein: 1.9, carbs: 5, fat: 0.3 },
            { id: 'v19', name: 'فطر', emoji: '🍄', caloriesPer100g: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },
            { id: 'v20', name: 'بازلاء', emoji: '🟢', caloriesPer100g: 81, protein: 5.4, carbs: 14.5, fat: 0.4 }
        ],
        fats: [
            { id: 'f1', name: 'زيت زيتون', emoji: '🫒', caloriesPer100g: 884, protein: 0, carbs: 0, fat: 100 },
            { id: 'f2', name: 'سمن بلدي', emoji: '🧈', caloriesPer100g: 876, protein: 0, carbs: 0, fat: 99 },
            { id: 'f3', name: 'زبدة', emoji: '🧈', caloriesPer100g: 717, protein: 0.9, carbs: 0.1, fat: 81 },
            { id: 'f4', name: 'زيت نباتي', emoji: '🛢️', caloriesPer100g: 884, protein: 0, carbs: 0, fat: 100 },
            { id: 'f5', name: 'زيت جوز الهند', emoji: '🥥', caloriesPer100g: 862, protein: 0, carbs: 0, fat: 100 },
            { id: 'f6', name: 'أفوكادو', emoji: '🥑', caloriesPer100g: 160, protein: 2, carbs: 8.5, fat: 14.7 },
            { id: 'f7', name: 'مكسرات', emoji: '🥜', caloriesPer100g: 607, protein: 20, carbs: 16, fat: 54 },
            { id: 'f8', name: 'طحينة', emoji: '🫙', caloriesPer100g: 595, protein: 17, carbs: 21, fat: 51 }
        ],
        spices: [
            { id: 's1', name: 'ملح', emoji: '🧂', caloriesPer100g: 0, protein: 0, carbs: 0, fat: 0 },
            { id: 's2', name: 'فلفل أسود', emoji: '⚫', caloriesPer100g: 251, protein: 10, carbs: 64, fat: 3.3 },
            { id: 's3', name: 'كمون', emoji: '🟤', caloriesPer100g: 375, protein: 18, carbs: 44, fat: 22 },
            { id: 's4', name: 'كركم', emoji: '🟡', caloriesPer100g: 354, protein: 8, carbs: 65, fat: 10 },
            { id: 's5', name: 'بابريكا', emoji: '🔴', caloriesPer100g: 282, protein: 14, carbs: 54, fat: 13 },
            { id: 's6', name: 'قرفة', emoji: '🟤', caloriesPer100g: 247, protein: 4, carbs: 81, fat: 1.2 },
            { id: 's7', name: 'هيل', emoji: '🟢', caloriesPer100g: 311, protein: 11, carbs: 68, fat: 6.7 },
            { id: 's8', name: 'قرنفل', emoji: '🟤', caloriesPer100g: 274, protein: 6, carbs: 66, fat: 13 },
            { id: 's9', name: 'لومي', emoji: '🟡', caloriesPer100g: 30, protein: 1, carbs: 8, fat: 0.3 },
            { id: 's10', name: 'بهارات كبسة', emoji: '🟠', caloriesPer100g: 300, protein: 10, carbs: 55, fat: 8 },
            { id: 's11', name: 'كاري', emoji: '🟡', caloriesPer100g: 325, protein: 14, carbs: 56, fat: 14 },
            { id: 's12', name: 'زعفران', emoji: '🔴', caloriesPer100g: 310, protein: 11, carbs: 65, fat: 6 },
            { id: 's13', name: 'زنجبيل بودرة', emoji: '🟡', caloriesPer100g: 335, protein: 9, carbs: 72, fat: 4.2 },
            { id: 's14', name: 'كزبرة ناشفة', emoji: '🟢', caloriesPer100g: 298, protein: 12, carbs: 55, fat: 17 },
            { id: 's15', name: 'جوزة الطيب', emoji: '🟤', caloriesPer100g: 525, protein: 6, carbs: 49, fat: 36 },
            { id: 's16', name: 'شطة', emoji: '🌶️', caloriesPer100g: 282, protein: 12, carbs: 50, fat: 16 },
            { id: 's17', name: 'ثوم بودرة', emoji: '🧄', caloriesPer100g: 331, protein: 17, carbs: 73, fat: 0.7 },
            { id: 's18', name: 'بصل بودرة', emoji: '🧅', caloriesPer100g: 341, protein: 10, carbs: 79, fat: 1 },
            { id: 's19', name: 'أوريجانو', emoji: '🌿', caloriesPer100g: 265, protein: 9, carbs: 69, fat: 4.3 },
            { id: 's20', name: 'ريحان', emoji: '🌿', caloriesPer100g: 233, protein: 23, carbs: 48, fat: 4 }
        ],
        extras: [
            { id: 'e1', name: 'حليب', emoji: '🥛', caloriesPer100g: 42, protein: 3.4, carbs: 5, fat: 1 },
            { id: 'e2', name: 'زبادي', emoji: '🍶', caloriesPer100g: 63, protein: 5.3, carbs: 7, fat: 1.5 },
            { id: 'e3', name: 'جبن شيدر', emoji: '🧀', caloriesPer100g: 403, protein: 25, carbs: 1.3, fat: 33 },
            { id: 'e4', name: 'جبن موزاريلا', emoji: '🧀', caloriesPer100g: 280, protein: 22, carbs: 2.2, fat: 20 },
            { id: 'e5', name: 'طحين', emoji: '🌾', caloriesPer100g: 364, protein: 10, carbs: 76, fat: 1 },
            { id: 'e6', name: 'بيكنج باودر', emoji: '🥄', caloriesPer100g: 53, protein: 0, carbs: 28, fat: 0 },
            { id: 'e7', name: 'خميرة', emoji: '🍞', caloriesPer100g: 325, protein: 40, carbs: 38, fat: 1.9 },
            { id: 'e8', name: 'صلصة طماطم', emoji: '🥫', caloriesPer100g: 24, protein: 1, carbs: 5, fat: 0.2 },
            { id: 'e9', name: 'معجون طماطم', emoji: '🥫', caloriesPer100g: 82, protein: 4, carbs: 19, fat: 0.5 },
            { id: 'e10', name: 'عسل', emoji: '🍯', caloriesPer100g: 304, protein: 0.3, carbs: 82, fat: 0 },
            { id: 'e11', name: 'خل', emoji: '🍾', caloriesPer100g: 18, protein: 0, carbs: 0.9, fat: 0 },
            { id: 'e12', name: 'صويا صوص', emoji: '🫗', caloriesPer100g: 53, protein: 8, carbs: 5, fat: 0.1 },
            { id: 'e13', name: 'مايونيز', emoji: '🫙', caloriesPer100g: 680, protein: 1, carbs: 1, fat: 75 },
            { id: 'e14', name: 'كاتشب', emoji: '🥫', caloriesPer100g: 112, protein: 1.7, carbs: 25, fat: 0.4 },
            { id: 'e15', name: 'خردل', emoji: '🫙', caloriesPer100g: 66, protein: 4.4, carbs: 5.8, fat: 3.3 },
            { id: 'e16', name: 'قشطة', emoji: '🥛', caloriesPer100g: 195, protein: 2, carbs: 3, fat: 20 },
            { id: 'e17', name: 'حليب مكثف', emoji: '🥛', caloriesPer100g: 321, protein: 8, carbs: 54, fat: 9 },
            { id: 'e18', name: 'جوز الهند', emoji: '🥥', caloriesPer100g: 354, protein: 3, carbs: 15, fat: 33 },
            { id: 'e19', name: 'فستق', emoji: '🥜', caloriesPer100g: 562, protein: 20, carbs: 28, fat: 45 },
            { id: 'e20', name: 'لوز', emoji: '🥜', caloriesPer100g: 579, protein: 21, carbs: 22, fat: 50 }
        ]
    },

    recipes: [
        // ========== غداء ==========
        { id: 'r1', name: 'كبسة دجاج', emoji: '🍗', time: 60, difficulty: 'medium', cost: 'medium', calories: 750, protein: 45, carbs: 80, fat: 25, servings: 4, rating: 4.9, category: 'غداء', ingredients: ['دجاج', 'رز بسمتي', 'طماطم', 'بصل', 'ثوم', 'زيت نباتي', 'بهارات كبسة', 'لومي', 'هيل', 'قرنفل', 'ملح', 'فلفل أسود'], steps: ['انقع الدجاج بالبهارات 30 دقيقة', 'حمّر البصل والثوم', 'أضف الدجاج وقلّب 10 دقائق', 'أضف الطماطم', 'أضف الماء والرز', 'اطبخ 40 دقيقة'], tips: ['لا تحرك الرز كثيراً', 'استخدم أرز بسمتي منقوع'] },
        { id: 'r2', name: 'كبسة لحم', emoji: '🥩', time: 90, difficulty: 'hard', cost: 'high', calories: 950, protein: 55, carbs: 78, fat: 35, servings: 4, rating: 4.8, category: 'غداء', ingredients: ['لحم غنم', 'رز بسمتي', 'طماطم', 'بصل', 'ثوم', 'زيت نباتي', 'بهارات كبسة', 'لومي', 'هيل', 'قرفة', 'ملح'], steps: ['اسلق اللحم 45 دقيقة', 'حمّر البصل', 'أضف اللحم والطماطم', 'أضف المرق والرز', 'اطبخ 35 دقيقة'], tips: ['كلما طال سلق اللحم كان أطيب'] },
        { id: 'r3', name: 'مكرونة بالدجاج والخضار', emoji: '🍝', time: 25, difficulty: 'easy', cost: 'low', calories: 520, protein: 35, carbs: 65, fat: 12, servings: 2, rating: 4.6, category: 'غداء', ingredients: ['مكرونة', 'دجاج', 'طماطم', 'فلفل أخضر', 'بصل', 'ثوم', 'زيت زيتون', 'ملح', 'فلفل أسود', 'بابريكا'], steps: ['اسلق المكرونة', 'قلّب الدجاج', 'أضف الخضار', 'اخلط الكل'], tips: ['أضف جبن مبشور'] },
        { id: 'r4', name: 'مكرونة بشاميل', emoji: '🧀', time: 45, difficulty: 'medium', cost: 'medium', calories: 780, protein: 38, carbs: 70, fat: 30, servings: 4, rating: 4.7, category: 'غداء', ingredients: ['مكرونة', 'لحم بقر', 'حليب', 'طحين', 'زبدة', 'جبن موزاريلا', 'بصل', 'ملح', 'فلفل أسود'], steps: ['اسلق المكرونة', 'حضر البشاميل', 'اقلي اللحم', 'ضع طبقات', 'اخبز 25 دقيقة'], tips: ['حرك البشاميل باستمرار'] },
        { id: 'r5', name: 'برجر دجاج', emoji: '🍔', time: 20, difficulty: 'easy', cost: 'medium', calories: 850, protein: 42, carbs: 55, fat: 38, servings: 2, rating: 4.5, category: 'غداء', ingredients: ['دجاج', 'خبز', 'خس', 'طماطم', 'بصل', 'جبن شيدر', 'زيت نباتي', 'ملح', 'فلفل أسود', 'بابريكا'], steps: ['اطحن الدجاج', 'شكل أقراص', 'اشوِ 5 دقائق', 'حمص الخبز', 'اجمع البرجر'], tips: ['استخدم صدر دجاج'] },
        { id: 'r6', name: 'برجر لحم', emoji: '🍔', time: 20, difficulty: 'easy', cost: 'medium', calories: 920, protein: 48, carbs: 50, fat: 42, servings: 2, rating: 4.4, category: 'غداء', ingredients: ['لحم بقر', 'خبز', 'خس', 'طماطم', 'بصل', 'جبن شيدر', 'زيت نباتي', 'ملح', 'فلفل أسود'], steps: ['شكل أقراص', 'اشوِ 4 دقائق', 'حمص الخبز', 'اجمع'], tips: ['لا تضغط على اللحم'] },
        { id: 'r7', name: 'شكشوكة', emoji: '🍳', time: 15, difficulty: 'easy', cost: 'low', calories: 350, protein: 20, carbs: 18, fat: 22, servings: 2, rating: 4.8, category: 'فطور', ingredients: ['بيض', 'طماطم', 'بصل', 'فلفل أخضر', 'ثوم', 'زيت زيتون', 'ملح', 'كمون', 'بابريكا'], steps: ['اقلي البصل والفلفل', 'أضف الطماطم', 'اصنع حفراً للبيض', 'غطِّ 5 دقائق'], tips: ['أضف جبن فيتا'] },
        { id: 'r8', name: 'أومليت بالخضار', emoji: '🥚', time: 8, difficulty: 'easy', cost: 'low', calories: 280, protein: 18, carbs: 10, fat: 18, servings: 1, rating: 4.5, category: 'فطور', ingredients: ['بيض', 'فلفل أخضر', 'طماطم', 'بصل', 'زيت زيتون', 'ملح', 'فلفل أسود'], steps: ['اخفق البيض', 'اقلي الخضار', 'أضف البيض', 'اطبخ 3 دقائق'], tips: ['استخدم مقلاة غير لاصقة'] },
        { id: 'r9', name: 'سلطة كينوا بالدجاج', emoji: '🥗', time: 15, difficulty: 'easy', cost: 'medium', calories: 420, protein: 40, carbs: 35, fat: 14, servings: 2, rating: 4.7, category: 'عشاء', ingredients: ['كينوا', 'دجاج', 'خيار', 'طماطم', 'خس', 'ليمون', 'زيت زيتون', 'ملح'], steps: ['اسلق الكينوا', 'اشوِ الدجاج', 'اخلط الكل'], tips: ['أضف أفوكادو'] },
        { id: 'r10', name: 'سلطة الدجاج المشوي', emoji: '🥗', time: 15, difficulty: 'easy', cost: 'medium', calories: 380, protein: 45, carbs: 12, fat: 18, servings: 2, rating: 4.6, category: 'عشاء', ingredients: ['دجاج', 'خس', 'جرجير', 'طماطم', 'خيار', 'ليمون', 'زيت زيتون', 'ملح'], steps: ['اشوِ الدجاج', 'اغسل الخضار', 'اخلط'], tips: ['أضف رمان'] },
        { id: 'r11', name: 'شوربة خضار', emoji: '🍲', time: 30, difficulty: 'easy', cost: 'low', calories: 180, protein: 6, carbs: 28, fat: 4, servings: 4, rating: 4.3, category: 'عشاء', ingredients: ['جزر', 'كوسة', 'بطاطس', 'بصل', 'طماطم', 'ثوم', 'زيت زيتون', 'ملح', 'كمون'], steps: ['قطع الخضار', 'اقلي البصل', 'أضف الماء', 'اهرسه'], tips: ['أضف زنجبيل'] },
        { id: 'r12', name: 'شوربة عدس', emoji: '🍲', time: 35, difficulty: 'easy', cost: 'low', calories: 250, protein: 15, carbs: 38, fat: 3, servings: 4, rating: 4.6, category: 'عشاء', ingredients: ['عدس', 'بصل', 'جزر', 'ثوم', 'كمون', 'زيت زيتون', 'ملح', 'فلفل أسود'], steps: ['انقع العدس', 'اقلي البصل', 'أضف العدس والماء', 'اهرسه'], tips: ['أضف ليمون'] },
        { id: 'r13', name: 'صيادية سمك', emoji: '🐟', time: 45, difficulty: 'medium', cost: 'high', calories: 650, protein: 42, carbs: 72, fat: 15, servings: 4, rating: 4.7, category: 'غداء', ingredients: ['سمك', 'رز مصري', 'بصل', 'ثوم', 'زيت نباتي', 'كمون', 'ملح', 'فلفل أسود', 'ليمون'], steps: ['اقلي السمك', 'حمّر البصل', 'أضف الرز', 'ضع السمك فوقه'], tips: ['استخدم سمك هامور'] },
        { id: 'r14', name: 'دجاج بالفرن مع الخضار', emoji: '🍗', time: 60, difficulty: 'medium', cost: 'medium', calories: 580, protein: 50, carbs: 32, fat: 22, servings: 4, rating: 4.6, category: 'غداء', ingredients: ['دجاج', 'بطاطس', 'جزر', 'بصل', 'ثوم', 'زيت زيتون', 'بابريكا', 'ملح', 'فلفل أسود', 'ليمون'], steps: ['تبل الدجاج', 'قطع الخضار', 'اخبز 45 دقيقة'], tips: ['غطِّ الصينية أول 30 دقيقة'] },
        { id: 'r15', name: 'فول مدمس', emoji: '🫘', time: 10, difficulty: 'easy', cost: 'low', calories: 300, protein: 18, carbs: 35, fat: 8, servings: 2, rating: 4.8, category: 'فطور', ingredients: ['فول', 'زيت زيتون', 'ليمون', 'ثوم', 'كمون', 'ملح', 'طماطم', 'بقدونس'], steps: ['سخن الفول', 'اهرسه', 'أضف الزيت والليمون'], tips: ['أضف بيض مسلوق'] },
        { id: 'r16', name: 'كنافة', emoji: '🍰', time: 40, difficulty: 'medium', cost: 'medium', calories: 650, protein: 15, carbs: 70, fat: 32, servings: 6, rating: 4.9, category: 'حلويات', ingredients: ['جبن موزاريلا', 'طحين', 'سمن بلدي', 'عسل', 'فستق'], steps: ['ابرش الكنافة', 'اخلط بالسمن', 'ضع طبقات', 'اخبز 25 دقيقة'], tips: ['قدمها ساخنة'] },
        { id: 'r17', name: 'بسبوسة', emoji: '🍰', time: 35, difficulty: 'easy', cost: 'low', calories: 450, protein: 8, carbs: 65, fat: 18, servings: 8, rating: 4.7, category: 'حلويات', ingredients: ['طحين', 'زبادي', 'سكر', 'زيت نباتي', 'بيكنج باودر', 'جوز الهند'], steps: ['اخلط المكونات', 'اخبز 25 دقيقة', 'اسقِ بالقطر'], tips: ['القطر بارد على بسبوسة ساخنة'] },
        { id: 'r18', name: 'مهلبية', emoji: '🍮', time: 15, difficulty: 'easy', cost: 'low', calories: 220, protein: 6, carbs: 35, fat: 7, servings: 4, rating: 4.5, category: 'حلويات', ingredients: ['حليب', 'سكر', 'نشا', 'فستق'], steps: ['اخلط النشا بالحليب', 'سخن مع السكر', 'اسكب وبرد'], tips: ['حرك باستمرار'] },
        { id: 'r19', name: 'سموذي بروتين', emoji: '🥤', time: 5, difficulty: 'easy', cost: 'medium', calories: 380, protein: 30, carbs: 40, fat: 10, servings: 1, rating: 4.4, category: 'مشروبات', ingredients: ['حليب', 'عسل', 'شوفان', 'زبادي'], steps: ['اخلط الكل'], tips: ['أضف ثلج'] },
        { id: 'r20', name: 'عصير أفوكادو', emoji: '🥑', time: 5, difficulty: 'easy', cost: 'medium', calories: 320, protein: 5, carbs: 28, fat: 20, servings: 1, rating: 4.6, category: 'مشروبات', ingredients: ['أفوكادو', 'حليب', 'عسل'], steps: ['اخلط الكل'], tips: ['أضف موز'] },
        { id: 'r21', name: 'رز بالخضار', emoji: '🍚', time: 30, difficulty: 'easy', cost: 'low', calories: 400, protein: 8, carbs: 75, fat: 6, servings: 3, rating: 4.3, category: 'غداء', ingredients: ['رز مصري', 'جزر', 'بصل', 'زيت نباتي', 'ملح', 'كمون'], steps: ['اقلي البصل', 'أضف الخضار', 'أضف الرز والماء'], tips: ['أضف مكعب مرق'] },
        { id: 'r22', name: 'ساندويتش دجاج', emoji: '🥪', time: 10, difficulty: 'easy', cost: 'low', calories: 420, protein: 35, carbs: 38, fat: 14, servings: 1, rating: 4.2, category: 'عشاء', ingredients: ['خبز', 'دجاج', 'خس', 'طماطم', 'مايونيز', 'ملح'], steps: ['اشوِ الدجاج', 'ادهن المايونيز', 'ضع الخضار'], tips: ['حمص الخبز'] },
        { id: 'r23', name: 'بيتزا منزلية', emoji: '🍕', time: 40, difficulty: 'medium', cost: 'medium', calories: 720, protein: 30, carbs: 75, fat: 28, servings: 4, rating: 4.5, category: 'غداء', ingredients: ['طحين', 'خميرة', 'زيت زيتون', 'صلصة طماطم', 'جبن موزاريلا', 'فلفل أخضر', 'ملح'], steps: ['اعجن واتركه يختمر', 'افرد العجين', 'ضع الصلصة والجبن', 'اخبز 15 دقيقة'], tips: ['سخن الفرن مسبقاً'] },
        { id: 'r24', name: 'بطاطس مقلية', emoji: '🍟', time: 15, difficulty: 'easy', cost: 'low', calories: 380, protein: 4, carbs: 40, fat: 22, servings: 2, rating: 4.0, category: 'مقبلات', ingredients: ['بطاطس', 'زيت نباتي', 'ملح', 'بابريكا'], steps: ['قطع البطاطس', 'انقعها', 'جففها', 'اقلها'], tips: ['التجفيف مهم للقرمشة'] },
        { id: 'r25', name: 'حمص بالطحينة', emoji: '🫘', time: 10, difficulty: 'easy', cost: 'low', calories: 280, protein: 12, carbs: 30, fat: 12, servings: 4, rating: 4.6, category: 'مقبلات', ingredients: ['حمص', 'طحينة', 'ليمون', 'ثوم', 'زيت زيتون', 'ملح', 'كمون'], steps: ['اسلق الحمص', 'اهرسه مع الطحينة'], tips: ['أضف ماء مثلج'] },
        { id: 'r26', name: 'منسف أردني', emoji: '🍖', time: 120, difficulty: 'hard', cost: 'high', calories: 1100, protein: 60, carbs: 85, fat: 45, servings: 6, rating: 4.9, category: 'غداء', ingredients: ['لحم غنم', 'رز مصري', 'خبز', 'سمن بلدي', 'لوز', 'بقدونس', 'ملح', 'فلفل أسود', 'هيل'], steps: ['اسلق اللحم 90 دقيقة', 'اطبخ الرز', 'ضع الخبز في الطبق', 'اسكب الرز واللحم', 'زين باللوز والبقدونس'], tips: ['استخدم لحم خروف صغير'] },
        { id: 'r27', name: 'ملوخية', emoji: '🥬', time: 60, difficulty: 'medium', cost: 'medium', calories: 350, protein: 30, carbs: 22, fat: 15, servings: 4, rating: 4.7, category: 'غداء', ingredients: ['ملوخية', 'دجاج', 'ثوم', 'كزبرة', 'زيت نباتي', 'ملح', 'فلفل أسود'], steps: ['اسلق الدجاج', 'اطبخ الملوخية 20 دقيقة', 'حمر الثوم والكزبرة', 'أضفها فوق الملوخية'], tips: ['لا تغطي الملوخية أثناء الطهي'] },
        { id: 'r28', name: 'بامية باللحم', emoji: '🫛', time: 50, difficulty: 'medium', cost: 'medium', calories: 420, protein: 35, carbs: 25, fat: 20, servings: 4, rating: 4.5, category: 'غداء', ingredients: ['بامية', 'لحم بقر', 'طماطم', 'بصل', 'ثوم', 'زيت نباتي', 'ملح', 'فلفل أسود'], steps: ['اقلي البامية قليلاً', 'اطبخ اللحم 30 دقيقة', 'أضف الطماطم والبامية', 'اطبخ 20 دقيقة'], tips: ['لا تحرك البامية كثيراً'] },
        { id: 'r29', name: 'محشي كوسة', emoji: '🥒', time: 75, difficulty: 'hard', cost: 'medium', calories: 480, protein: 28, carbs: 45, fat: 18, servings: 5, rating: 4.8, category: 'غداء', ingredients: ['كوسة', 'رز مصري', 'لحم مفروم', 'طماطم', 'بصل', 'ثوم', 'زيت زيتون', 'ملح', 'فلفل أسود', 'كمون'], steps: ['انقر الكوسة', 'اخلط الحشوة', 'احشِ الكوسة', 'اطبخ في صلصة الطماطم 40 دقيقة'], tips: ['لا تملأ الكوسة بالكامل'] },
        { id: 'r30', name: 'ورق عنب', emoji: '🍃', time: 90, difficulty: 'hard', cost: 'medium', calories: 550, protein: 25, carbs: 60, fat: 22, servings: 6, rating: 4.9, category: 'غداء', ingredients: ['ورق عنب', 'رز مصري', 'لحم مفروم', 'طماطم', 'بصل', 'ليمون', 'زيت زيتون', 'ملح', 'فلفل أسود', 'كمون'], steps: ['اسلق ورق العنب', 'اخلط الحشوة', 'الف الورق', 'رصهم في القدر', 'اطبخ 50 دقيقة'], tips: ['لا تكثر من الحشوة'] },
        { id: 'r31', name: 'فاهيتا دجاج', emoji: '🌮', time: 25, difficulty: 'easy', cost: 'medium', calories: 480, protein: 38, carbs: 35, fat: 18, servings: 3, rating: 4.6, category: 'غداء', ingredients: ['دجاج', 'فلفل أخضر', 'فلفل أحمر', 'بصل', 'ثوم', 'زيت زيتون', 'ملح', 'كمون', 'بابريكا', 'خبز'], steps: ['قطع الدجاج شرائح', 'اقلي الخضار', 'أضف الدجاج والبهارات', 'قدم مع الخبز'], tips: ['أضف جبنة وقشطة'] },
        { id: 'r32', name: 'تشيز برجر', emoji: '🍔', time: 20, difficulty: 'easy', cost: 'medium', calories: 1050, protein: 55, carbs: 48, fat: 58, servings: 2, rating: 4.5, category: 'غداء', ingredients: ['لحم بقر', 'خبز', 'جبن شيدر', 'خس', 'طماطم', 'بصل', 'كاتشب', 'مايونيز', 'ملح', 'فلفل أسود'], steps: ['شكل أقراص اللحم', 'اشوِ 4 دقائق لكل جهة', 'ضع الجبنة', 'اجمع البرجر'], tips: ['استخدم لحم 80% دهن'] },
        { id: 'r33', name: 'تاكو سمك', emoji: '🌮', time: 20, difficulty: 'easy', cost: 'medium', calories: 420, protein: 32, carbs: 38, fat: 14, servings: 2, rating: 4.4, category: 'غداء', ingredients: ['سمك', 'خبز', 'خس', 'طماطم', 'ليمون', 'زيت زيتون', 'ملح', 'كمون'], steps: ['اشوِ السمك', 'قطع الخضار', 'اجمع التاكو'], tips: ['أضف صوص زبادي'] },
        { id: 'r34', name: 'شوربة دجاج', emoji: '🍲', time: 40, difficulty: 'easy', cost: 'low', calories: 200, protein: 25, carbs: 15, fat: 4, servings: 4, rating: 4.5, category: 'عشاء', ingredients: ['دجاج', 'جزر', 'كوسة', 'بصل', 'ثوم', 'زيت زيتون', 'ملح', 'فلفل أسود', 'بقدونس'], steps: ['اسلق الدجاج', 'أضف الخضار', 'اطبخ 20 دقيقة'], tips: ['أضف ليمون عند التقديم'] },
        { id: 'r35', name: 'سلطة سيزر', emoji: '🥗', time: 10, difficulty: 'easy', cost: 'medium', calories: 350, protein: 32, carbs: 15, fat: 18, servings: 2, rating: 4.6, category: 'عشاء', ingredients: ['خس', 'دجاج', 'خبز', 'جبن شيدر', 'مايونيز', 'ليمون', 'ملح', 'فلفل أسود'], steps: ['اشوِ الدجاج', 'قطع الخبز وحمصه', 'اخلط الكل'], tips: ['أضف أنشوجة'] },
        { id: 'r36', name: 'باذنجان مقلي', emoji: '🍆', time: 20, difficulty: 'easy', cost: 'low', calories: 320, protein: 3, carbs: 18, fat: 26, servings: 2, rating: 4.2, category: 'مقبلات', ingredients: ['باذنجان', 'زيت نباتي', 'ملح', 'كمون'], steps: ['قطع الباذنجان', 'اقله في زيت ساخن', 'صفه ورش الملح'], tips: ['انقعه في ماء وملح قبل القلي'] },
        { id: 'r37', name: 'متبل', emoji: '🍆', time: 15, difficulty: 'easy', cost: 'low', calories: 200, protein: 5, carbs: 15, fat: 13, servings: 4, rating: 4.5, category: 'مقبلات', ingredients: ['باذنجان', 'طحينة', 'ليمون', 'ثوم', 'زيت زيتون', 'ملح'], steps: ['اشوِ الباذنجان', 'قشر واهرسه', 'أضف الطحينة والليمون'], tips: ['الشوي يعطي طعم مدخن'] },
        { id: 'r38', name: 'تبولة', emoji: '🥗', time: 15, difficulty: 'easy', cost: 'low', calories: 180, protein: 4, carbs: 22, fat: 8, servings: 4, rating: 4.6, category: 'سلطات', ingredients: ['برغل', 'بقدونس', 'طماطم', 'بصل', 'ليمون', 'زيت زيتون', 'ملح'], steps: ['انقع البرغل', 'اقطع البقدونس ناعم', 'اخلط الكل'], tips: ['استخدم برغل ناعم'] },
        { id: 'r39', name: 'فتوش', emoji: '🥗', time: 10, difficulty: 'easy', cost: 'low', calories: 220, protein: 5, carbs: 25, fat: 10, servings: 3, rating: 4.4, category: 'سلطات', ingredients: ['خبز', 'خس', 'طماطم', 'خيار', 'بصل', 'ليمون', 'زيت زيتون', 'ملح'], steps: ['قطع الخبز وحمصه', 'قطع الخضار', 'اخلط مع الصلصة'], tips: ['أضف السماق'] },
        { id: 'r40', name: 'كبة مقلية', emoji: '🏈', time: 40, difficulty: 'medium', cost: 'medium', calories: 550, protein: 25, carbs: 35, fat: 30, servings: 4, rating: 4.7, category: 'مقبلات', ingredients: ['برغل', 'لحم مفروم', 'بصل', 'زيت نباتي', 'ملح', 'فلفل أسود', 'كمون'], steps: ['انقع البرغل', 'اخلط مع اللحم', 'شكل الكبة', 'اقلها'], tips: ['ضع حشوة لحم في المنتصف'] },
        { id: 'r41', name: 'سمبوسة', emoji: '🥟', time: 30, difficulty: 'medium', cost: 'low', calories: 400, protein: 15, carbs: 35, fat: 22, servings: 4, rating: 4.5, category: 'مقبلات', ingredients: ['طحين', 'لحم مفروم', 'بصل', 'زيت نباتي', 'ملح', 'كمون', 'فلفل أسود'], steps: ['اعجن الطحين', 'اطبخ الحشوة', 'شكل السمبوسة', 'اقلها'], tips: ['أضف صنوبر'] },
        { id: 'r42', name: 'زلابيا', emoji: '🍩', time: 30, difficulty: 'medium', cost: 'low', calories: 480, protein: 6, carbs: 68, fat: 20, servings: 6, rating: 4.6, category: 'حلويات', ingredients: ['طحين', 'خميرة', 'عسل', 'زيت نباتي'], steps: ['اخلط العجين', 'اتركه يختمر', 'شكل الزلابيا', 'اقلها واسقِ بالعسل'], tips: ['القطر ساخن'] },
        { id: 'r43', name: 'قطايف', emoji: '🥞', time: 40, difficulty: 'medium', cost: 'medium', calories: 520, protein: 10, carbs: 65, fat: 22, servings: 6, rating: 4.8, category: 'حلويات', ingredients: ['طحين', 'خميرة', 'حليب', 'جوز الهند', 'فستق', 'عسل'], steps: ['اخلط العجين', 'اطبخ القطايف', 'احشِ', 'اقلها أو اخبزها'], tips: ['احشِ بالجبن أو المكسرات'] },
        { id: 'r44', name: 'قهوة عربية', emoji: '☕', time: 10, difficulty: 'easy', cost: 'low', calories: 5, protein: 0, carbs: 1, fat: 0, servings: 4, rating: 4.9, category: 'مشروبات', ingredients: ['قهوة', 'هيل', 'زعفران'], steps: ['اغلِ الماء', 'أضف القهوة والهيل', 'اتركها 5 دقائق', 'صفِّ وقدم'], tips: ['لا تغلي القهوة كثيراً'] },
        { id: 'r45', name: 'شاي عدني', emoji: '🍵', time: 15, difficulty: 'easy', cost: 'low', calories: 80, protein: 3, carbs: 12, fat: 2, servings: 2, rating: 4.7, category: 'مشروبات', ingredients: ['شاي', 'حليب', 'سكر', 'هيل', 'قرفة', 'زنجبيل'], steps: ['اغلِ الماء مع البهارات', 'أضف الشاي', 'أضف الحليب المكثف'], tips: ['استخدم حليب مكثف'] },
        { id: 'r46', name: 'براوني', emoji: '🍫', time: 30, difficulty: 'easy', cost: 'medium', calories: 580, protein: 8, carbs: 60, fat: 34, servings: 6, rating: 4.7, category: 'حلويات', ingredients: ['شوكولاتة', 'زبدة', 'سكر', 'بيض', 'طحين'], steps: ['اذوب الشوكولاتة والزبدة', 'أضف السكر والبيض', 'أضف الطحين', 'اخبز 20 دقيقة'], tips: ['لا تخبز زيادة'] },
        { id: 'r47', name: 'كيكة ليمون', emoji: '🍋', time: 45, difficulty: 'medium', cost: 'low', calories: 400, protein: 6, carbs: 55, fat: 16, servings: 8, rating: 4.4, category: 'حلويات', ingredients: ['طحين', 'سكر', 'بيض', 'زبدة', 'ليمون', 'بيكنج باودر'], steps: ['اخلط الزبدة والسكر', 'أضف البيض', 'أضف الطحين وعصير الليمون', 'اخبز 30 دقيقة'], tips: ['أضف بشر ليمون'] },
        { id: 'r48', name: 'فطاير سبانخ', emoji: '🥟', time: 35, difficulty: 'medium', cost: 'low', calories: 320, protein: 10, carbs: 38, fat: 13, servings: 5, rating: 4.6, category: 'مقبلات', ingredients: ['طحين', 'خميرة', 'سبانخ', 'بصل', 'ليمون', 'زيت زيتون', 'ملح'], steps: ['اعجن واتركه يختمر', 'اطبخ الحشوة', 'شكل الفطاير', 'اخبز 15 دقيقة'], tips: ['أضف السماق'] },
        { id: 'r49', name: 'مناقيش زعتر', emoji: '🍕', time: 25, difficulty: 'easy', cost: 'low', calories: 300, protein: 8, carbs: 40, fat: 12, servings: 3, rating: 4.5, category: 'فطور', ingredients: ['طحين', 'خميرة', 'زعتر', 'زيت زيتون', 'ملح'], steps: ['اعجن واتركه يختمر', 'افرد العجين', 'ضع الزعتر والزيت', 'اخبز 10 دقائق'], tips: ['أضف جبنة'] },
        { id: 'r50', name: 'فطائر البطاطس', emoji: '🥔', time: 25, difficulty: 'easy', cost: 'low', calories: 350, protein: 8, carbs: 40, fat: 17, servings: 3, rating: 4.3, category: 'فطور', ingredients: ['بطاطس', 'بصل', 'بيض', 'طحين', 'زيت نباتي', 'ملح', 'فلفل أسود'], steps: ['ابشر البطاطس والبصل', 'أضف البيض والطحين', 'اقلِ المزيج'], tips: ['اعصر البطاطس من الماء'] }
    ],

    alternativePlans: [
        { id: 'alt1', recipeId: 'r5', originalCalories: 850, planName: 'برجر خفيف', chef: 'سارة', savedCalories: 400, description: 'استخدم صدر دجاج مشوي بدل المقلي، وخبز أسمر، واستغني عن الجبن', equivalent: '🏃 45 دقيقة مشي', newCalories: 450, newProtein: 38, newCarbs: 35, newFat: 15 },
        { id: 'alt2', recipeId: 'r5', originalCalories: 850, planName: 'برجر بدون عجين', chef: 'محمد', savedCalories: 600, description: 'استبدل الخبز بورق خس طازج، واستخدم جبن قليل الدسم', equivalent: '🏊 35 دقيقة سباحة', newCalories: 250, newProtein: 40, newCarbs: 5, newFat: 8 },
        { id: 'alt3', recipeId: 'r1', originalCalories: 750, planName: 'كبسة خفيفة', chef: 'نورة', savedCalories: 330, description: 'استخدم صدر دجاج منزوع الجلد، وأرز بني، وقلل الزيت للنصف', equivalent: '🚴 30 دقيقة دراجة', newCalories: 420, newProtein: 38, newCarbs: 50, newFat: 10 },
        { id: 'alt4', recipeId: 'r4', originalCalories: 780, planName: 'مكرونة بشاميل خفيف', chef: 'ليلى', savedCalories: 350, description: 'استخدم حليب قليل الدسم، ودقيق الشوفان بدل الطحين الأبيض', equivalent: '🏋️ 25 دقيقة تمارين', newCalories: 430, newProtein: 32, newCarbs: 45, newFat: 12 },
        { id: 'alt5', recipeId: 'r23', originalCalories: 720, planName: 'بيتزا خفيفة', chef: 'أحمد', savedCalories: 300, description: 'استخدم عجين قرنبيط بدل الطحين، وجبن قليل الدسم', equivalent: '🏃 35 دقيقة هرولة', newCalories: 420, newProtein: 25, newCarbs: 30, newFat: 15 },
        { id: 'alt6', recipeId: 'r2', originalCalories: 950, planName: 'كبسة لحم أخف', chef: 'خالد', savedCalories: 400, description: 'استخدم لحم بقري قليل الدهن، وقلل الأرز، وأضف خضار أكثر', equivalent: '🏊 40 دقيقة سباحة', newCalories: 550, newProtein: 48, newCarbs: 45, newFat: 18 },
        { id: 'alt7', recipeId: 'r16', originalCalories: 650, planName: 'كنافة بالقشطة', chef: 'مريم', savedCalories: 200, description: 'استخدم جبن قريش بدل الموزاريلا، وقلل القطر', equivalent: '🏃 20 دقيقة مشي', newCalories: 450, newProtein: 12, newCarbs: 55, newFat: 20 },
        { id: 'alt8', recipeId: 'r3', originalCalories: 520, planName: 'مكرونة بالخضار فقط', chef: 'هند', savedCalories: 200, description: 'استغني عن الدجاج وأضف مزيداً من الخضار الملونة', equivalent: '🚶 25 دقيقة مشي', newCalories: 320, newProtein: 12, newCarbs: 55, newFat: 5 },
        { id: 'alt9', recipeId: 'r7', originalCalories: 350, planName: 'شكشوكة بالفرن', chef: 'عمر', savedCalories: 100, description: 'اخبز الشكشوكة بدل قليها، واستخدم بياض البيض فقط', equivalent: '🏋️ 10 دقائق تمارين', newCalories: 250, newProtein: 18, newCarbs: 15, newFat: 12 },
        { id: 'alt10', recipeId: 'r6', originalCalories: 920, planName: 'برجر تركي', chef: 'نورة', savedCalories: 350, description: 'استخدم لحم ديك رومي بدل البقري، وخبز أسمر', equivalent: '🏃 40 دقيقة هرولة', newCalories: 570, newProtein: 45, newCarbs: 40, newFat: 20 },
        { id: 'alt11', recipeId: 'r24', originalCalories: 380, planName: 'بطاطس بالفرن', chef: 'سامي', savedCalories: 200, description: 'اخبز البطاطس في الفرن بدل القلي، مع رشة زيت زيتون', equivalent: '🚶 20 دقيقة مشي', newCalories: 180, newProtein: 3, newCarbs: 35, newFat: 4 },
        { id: 'alt12', recipeId: 'r22', originalCalories: 420, planName: 'ساندويتش صحي', chef: 'ليان', savedCalories: 200, description: 'استخدم خبز أسمر، صدر دجاج مشوي، واستغني عن المايونيز', equivalent: '🏊 20 دقيقة سباحة', newCalories: 220, newProtein: 32, newCarbs: 18, newFat: 5 },
        { id: 'alt13', recipeId: 'r17', originalCalories: 450, planName: 'بسبوسة بالزبادي', chef: 'فاطمة', savedCalories: 150, description: 'استخدم زبادي قليل الدسم، وقلل السكر، وأضف جوز هند أكثر', equivalent: '🏋️ 15 دقيقة تمارين', newCalories: 300, newProtein: 7, newCarbs: 48, newFat: 10 },
        { id: 'alt14', recipeId: 'r19', originalCalories: 380, planName: 'سموذي أخضر', chef: 'رنا', savedCalories: 200, description: 'استخدم سبانخ، تفاح أخضر، خيار، وزنجبيل بدون عسل', equivalent: '🚴 20 دقيقة دراجة', newCalories: 180, newProtein: 15, newCarbs: 25, newFat: 3 },
        { id: 'alt15', recipeId: 'r14', originalCalories: 580, planName: 'دجاج مشوي خفيف', chef: 'باسم', savedCalories: 250, description: 'انزع جلد الدجاج، استخدم بطاطا حلوة، وقلل الزيت', equivalent: '🏃 25 دقيقة هرولة', newCalories: 330, newProtein: 42, newCarbs: 25, newFat: 10 }
    ],

    emergencySnacks: [
        { name: 'خيارة كاملة', emoji: '🥒', calories: 16 }, { name: 'تفاحة صغيرة', emoji: '🍎', calories: 52 },
        { name: 'جزرة متوسطة', emoji: '🥕', calories: 25 }, { name: 'بيضة مسلوقة', emoji: '🥚', calories: 78 },
        { name: 'كوب شاي أخضر بدون سكر', emoji: '🍵', calories: 2 }, { name: 'عود كرفس', emoji: '🥬', calories: 6 },
        { name: 'حبة فراولة كبيرة', emoji: '🍓', calories: 33 }, { name: 'شريحة بطيخ', emoji: '🍉', calories: 46 },
        { name: 'حبة كيوي', emoji: '🥝', calories: 42 }, { name: 'نصف كوب فشار بدون زيت', emoji: '🍿', calories: 31 }
    ],

    boostSnacks: [
        { name: 'حفنة مكسرات مشكلة (50غ)', emoji: '🥜', calories: 320 }, { name: 'توست أفوكادو', emoji: '🥑', calories: 350 },
        { name: 'موز مع زبدة فول سوداني', emoji: '🍌', calories: 380 }, { name: 'سموذي بروتين', emoji: '🥤', calories: 420 },
        { name: 'جبن مع خبز أسمر', emoji: '🧀', calories: 310 }, { name: 'تمر مع طحينة', emoji: '🌴', calories: 340 },
        { name: 'زبادي كامل الدسم مع عسل ومكسرات', emoji: '🍶', calories: 360 }, { name: 'ساندويتش زبدة فول سوداني', emoji: '🥪', calories: 400 }
    ],

    supplements: [
        { id: 'sup1', name: 'بروتين واي', emoji: '🥛', dose: '1 سكوب (30غ) بعد التمرين', timing: 'بعد التمرين مباشرة', for: ['muscle', 'gain'], reminder: true },
        { id: 'sup2', name: 'كرياتين مونوهيدرات', emoji: '💪', dose: '5 غرام يومياً', timing: 'أي وقت مع الماء', for: ['muscle'], reminder: true },
        { id: 'sup3', name: 'أوميغا 3', emoji: '🐟', dose: '1000 ملغ يومياً', timing: 'مع الوجبة', for: ['muscle', 'maintain', 'lose'], reminder: true },
        { id: 'sup4', name: 'فيتامين د', emoji: '☀️', dose: '1000 وحدة دولية يومياً', timing: 'مع وجبة دسمة', for: ['muscle', 'maintain', 'lose', 'gain'], reminder: true },
        { id: 'sup5', name: 'بي سي ايه ايه (BCAA)', emoji: '💊', dose: '5-10 غرام', timing: 'أثناء التمرين', for: ['muscle'], reminder: false },
        { id: 'sup6', name: 'جلوتامين', emoji: '🛡️', dose: '5 غرام يومياً', timing: 'قبل النوم', for: ['muscle', 'lose'], reminder: true },
        { id: 'sup7', name: 'مكمل ألياف', emoji: '🌿', dose: 'ملعقة صغيرة يومياً', timing: 'مع الماء', for: ['lose', 'maintain'], reminder: true },
        { id: 'sup8', name: 'مالتوديكسترين', emoji: '🍚', dose: '30-50 غرام', timing: 'بعد التمرين', for: ['gain', 'muscle'], reminder: false }
    ],

    challenges: [
        { id: 'ch1', name: 'تحدي 30 يوم حرق', icon: '🔥', goal: 'وفر 500 سعرة يومياً', target: 500, type: 'save', medal: '🏆 محارب الدهون' },
        { id: 'ch2', name: 'تحدي 30 يوم توازن', icon: '⚖️', goal: 'ابقَ في نطاق ±50 سعرة', target: 0, type: 'balance', medal: '⚖️ المتزن الذهبي' },
        { id: 'ch3', name: 'تحدي 30 يوم بناء', icon: '💪', goal: 'أضف 300 سعرة يومياً', target: 300, type: 'gain', medal: '💪 أسطورة الكتلة' },
        { id: 'ch4', name: 'تحدي 30 يوم عضلي', icon: '🏋️', goal: 'حافظ على 2غ بروتين/كجم', target: 200, type: 'muscle', medal: '🏋️ بطل العضلات' }
    ],

    badges: [
        { id: 'b1', name: 'مبتدئ', icon: '🌱', condition: 'تسجيل أول طبخة' },
        { id: 'b2', name: 'صائد البيض', icon: '🥚', condition: 'استخدام البيض في 20 طبخة' },
        { id: 'b3', name: 'ملك السلطات', icon: '🥗', condition: 'تجربة 15 نوع سلطة' },
        { id: 'b4', name: 'شيف', icon: '👨‍🍳', condition: 'تسجيل 50 طبخة' },
        { id: 'b5', name: 'طباخ الأسبوع', icon: '⭐', condition: 'الحصول على أعلى تقييم' },
        { id: 'b6', name: 'المبدل الذكي', icon: '🔄', condition: 'توفير 10,000 سعرة بالبدائل' },
        { id: 'b7', name: 'موسوعة', icon: '📚', condition: 'تجربة 100 طبخة' },
        { id: 'b8', name: 'بطل التحدي', icon: '🏆', condition: 'إكمال تحدي 30 يوم' },
        { id: 'b9', name: 'وحش البروتين', icon: '🥩', condition: 'استهلاك 2000 غرام بروتين' },
        { id: 'b10', name: 'عاشق المكملات', icon: '💊', condition: 'الالتزام بالمكملات 30 يوم' }
    ],

    healthModes: {
        lose: { name: 'خسارة الوزن', icon: '🔥', themeClass: 'theme-lose', slogan: 'احرق أكثر مما تأكل', goal: 'عجز سعرات', dailyTarget: 500, mealRange: '300-500 سعرة', reminders: '3 وجبات + 2 سناك خفيف', emergencyBtn: true, boostBtn: false, primaryColor: '#4CAF50', statusText: 'وفرت اليوم', proteinPerKg: 1.6 },
        maintain: { name: 'المحافظة', icon: '⚖️', themeClass: 'theme-maintain', slogan: 'حافظ على توازنك', goal: 'توازن سعرات', dailyTarget: 0, mealRange: '500-700 سعرة', reminders: '3 وجبات + 1 سناك', emergencyBtn: false, boostBtn: false, primaryColor: '#2196F3', statusText: 'توازنك اليوم', proteinPerKg: 1.4 },
        gain: { name: 'زيادة الوزن', icon: '💪', themeClass: 'theme-gain', slogan: 'ابنِ جسمك بذكاء', goal: 'فائض سعرات', dailyTarget: 300, mealRange: '700-1000 سعرة', reminders: '3 وجبات + 3 سناكات', emergencyBtn: false, boostBtn: true, primaryColor: '#FF9800', statusText: 'زودت اليوم', proteinPerKg: 1.8 },
        muscle: { name: 'بناء عضلي', icon: '🏋️', themeClass: 'theme-muscle', slogan: 'ابني عضلاتك بقوة', goal: 'فائض سعرات + بروتين عالي', dailyTarget: 400, mealRange: '600-900 سعرة', reminders: '5 وجبات + 3 سناكات', emergencyBtn: false, boostBtn: true, primaryColor: '#9C27B0', statusText: 'بنيت اليوم', proteinPerKg: 2.2 }
    }
};

// ==================== حالة التطبيق ====================
const AppState = {
    currentPage: 'home', currentHealthMode: 'maintain', theme: 'theme-maintain',
    selectedIngredients: [], dailyCaloriesConsumed: 900, dailyCalorieTarget: 2000,
    savedRecipes: JSON.parse(localStorage.getItem('taghdhiati_favorites') || '[]'),
    recipeHistory: JSON.parse(localStorage.getItem('taghdhiati_history') || '[]'),
    challengeProgress: { day: 3, total: 30 },
    earnedBadges: JSON.parse(localStorage.getItem('taghdhiati_badges') || '["b1","b2","b3"]'),
    userRecipes: JSON.parse(localStorage.getItem('taghdhiati_userRecipes') || '[]'),
    notes: JSON.parse(localStorage.getItem('taghdhiati_notes') || '[]'),
    shoppingList: JSON.parse(localStorage.getItem('taghdhiati_shopping') || '[]'),
    currentRecipeFilter: null, searchResults: [], currentKitchenTab: 'my',
    cupSize: parseInt(localStorage.getItem('taghdhiati_cupSize') || '250'),
    mealReminder: localStorage.getItem('taghdhiati_mealReminder') !== 'false',
    challengeReminder: localStorage.getItem('taghdhiati_challengeReminder') !== 'false',
    soundEnabled: localStorage.getItem('taghdhiati_sound') !== 'false',
    supplementReminder: localStorage.getItem('taghdhiati_supplementReminder') === 'true',
    userWeight: parseInt(localStorage.getItem('taghdhiati_weight') || '70'),
    activityLevel: parseFloat(localStorage.getItem('taghdhiati_activity') || '1.4'),
    dailyProteinTarget: parseInt(localStorage.getItem('taghdhiati_proteinTarget') || '140'),
    totalProteinConsumed: 0
};

// ==================== دوال التهيئة ====================
function initApp() {
    setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        if (splash) { splash.style.opacity = '0'; splash.style.visibility = 'hidden'; splash.style.pointerEvents = 'none'; setTimeout(() => { if (splash) splash.style.display = 'none'; }, 300); }
    }, 2400);
    loadSettings(); updateAllUI(); updateEmergencyButtons(); updateBadgesDisplay();
    renderQuickRecipes(); renderShoppingList(); renderIngredientGroups(); renderAltRecipeSelect();
    updateCalorieValue(); updateBestCaloriesPage(); updateAlternativesPage(); updateChallengeDots();
    updateKitchenStats(); renderSupplements(); calcDailyProtein(); calcDailyProtein2();
    setTimeout(() => showToast('🥗 أهلاً بك في تطبيق تغذيتي! النسخة العضلية 🏋️'), 2500);
}

function loadSettings() {
    const savedMode = localStorage.getItem('taghdhiati_mode') || 'maintain';
    const savedTheme = localStorage.getItem('taghdhiati_theme') || 'theme-maintain';
    AppState.currentHealthMode = savedMode; AppState.theme = savedTheme;
    AppState.cupSize = parseInt(localStorage.getItem('taghdhiati_cupSize') || '250');
    AppState.mealReminder = localStorage.getItem('taghdhiati_mealReminder') !== 'false';
    AppState.challengeReminder = localStorage.getItem('taghdhiati_challengeReminder') !== 'false';
    AppState.soundEnabled = localStorage.getItem('taghdhiati_sound') !== 'false';
    AppState.supplementReminder = localStorage.getItem('taghdhiati_supplementReminder') === 'true';
    AppState.userWeight = parseInt(localStorage.getItem('taghdhiati_weight') || '70');
    AppState.activityLevel = parseFloat(localStorage.getItem('taghdhiati_activity') || '1.4');
    AppState.dailyProteinTarget = parseInt(localStorage.getItem('taghdhiati_proteinTarget') || '140');
    document.body.className = AppState.theme;
    const settingsMode = document.getElementById('settingsMode'); if (settingsMode) settingsMode.value = savedMode;
    const settingsTheme = document.getElementById('settingsTheme'); if (settingsTheme) settingsTheme.value = savedTheme;
    const settingsCup = document.getElementById('settingsCup'); if (settingsCup) settingsCup.value = AppState.cupSize.toString();
    const mealReminderToggle = document.getElementById('mealReminderToggle'); if (mealReminderToggle) mealReminderToggle.checked = AppState.mealReminder;
    const challengeReminderToggle = document.getElementById('challengeReminderToggle'); if (challengeReminderToggle) challengeReminderToggle.checked = AppState.challengeReminder;
    const soundToggle = document.getElementById('soundToggle'); if (soundToggle) soundToggle.checked = AppState.soundEnabled;
    const remindSupplements = document.getElementById('remindSupplements'); if (remindSupplements) remindSupplements.checked = AppState.supplementReminder;
    const userWeightInput = document.getElementById('userWeight'); if (userWeightInput) userWeightInput.value = AppState.userWeight;
    const activityLevelSelect = document.getElementById('activityLevel'); if (activityLevelSelect) activityLevelSelect.value = AppState.activityLevel;
    const userWeightInput2 = document.getElementById('userWeight2'); if (userWeightInput2) userWeightInput2.value = AppState.userWeight;
    const activityLevelSelect2 = document.getElementById('activityLevel2'); if (activityLevelSelect2) activityLevelSelect2.value = AppState.activityLevel;
}

// ==================== التنقل ====================
function navigateTo(pageName) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageMap = { 'home': 'homePage', 'buildMeal': 'buildMealPage', 'bestCalories': 'bestCaloriesPage', 'smartAlternatives': 'smartAlternativesPage', 'myKitchen': 'myKitchenPage', 'myHealth': 'myHealthPage', 'challenges': 'challengesPage', 'shoppingList': 'shoppingListPage', 'settings': 'settingsPage', 'supplements': 'supplementsPage', 'proteinCalc': 'proteinCalcPage' };
    const pageId = pageMap[pageName]; if (pageId) { const page = document.getElementById(pageId); if (page) page.classList.add('active'); AppState.currentPage = pageName; }
    updateNavButtons(pageName);
    if (pageName === 'buildMeal') { updateSelectedIngredientsDisplay(); renderIngredientGroups(); }
    if (pageName === 'bestCalories') { updateCalorieValue(); updateBestCaloriesPage(); }
    if (pageName === 'smartAlternatives') { updateAlternativesPage(); renderAltRecipeSelect(); }
    if (pageName === 'myHealth') { updateHealthPage(); updateChallengeDots(); }
    if (pageName === 'challenges') { renderChallengeCards(); updateBadgesDisplay(); }
    if (pageName === 'shoppingList') renderShoppingList();
    if (pageName === 'myKitchen') { updateKitchenStats(); renderKitchenRecipes(); }
    if (pageName === 'supplements') renderSupplements();
    if (pageName === 'proteinCalc') calcDailyProtein2();
    document.querySelector('.main-content').scrollTop = 0;
}
function goHome() { navigateTo('home'); }
function updateNavButtons(activePage) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const navMap = { 'home': 0, 'buildMeal': 1, 'bestCalories': 2, 'supplements': 3, 'settings': 4 };
    const index = navMap[activePage]; if (index !== undefined) { const navBtns = document.querySelectorAll('.nav-btn'); if (navBtns[index]) navBtns[index].classList.add('active'); }
}

// ==================== الوضع الصحي والثيمات ====================
function switchHealthMode(mode, showToastFlag = true) {
    AppState.currentHealthMode = mode; const modeData = APP_DATABASE.healthModes[mode]; AppState.theme = modeData.themeClass;
    document.body.className = AppState.theme; localStorage.setItem('taghdhiati_mode', mode); localStorage.setItem('taghdhiati_theme', AppState.theme);
    updateAllUI(); updateEmergencyButtons(); calcDailyProtein();
    const settingsMode = document.getElementById('settingsMode'); if (settingsMode) settingsMode.value = mode;
    const settingsTheme = document.getElementById('settingsTheme'); if (settingsTheme) settingsTheme.value = AppState.theme;
    document.querySelectorAll('.health-mode-option').forEach(opt => { opt.classList.remove('active'); if (opt.dataset.mode === mode) opt.classList.add('active'); });
    if (showToastFlag) showToast(`${modeData.icon} تم التبديل إلى وضع ${modeData.name}`);
}
function switchTheme(themeClass) { AppState.theme = themeClass; document.body.className = themeClass; localStorage.setItem('taghdhiati_theme', themeClass); const settingsTheme = document.getElementById('settingsTheme'); if (settingsTheme) settingsTheme.value = themeClass; updateAllUI(); showToast('🎨 تم تغيير الثيم بنجاح'); }
function updateAllUI() {
    const mode = APP_DATABASE.healthModes[AppState.currentHealthMode];
    const modeTitle = document.getElementById('modeTitle'); const modeSlogan = document.getElementById('modeSlogan'); const statUnit = document.getElementById('statUnit'); const modeStatusText = document.getElementById('modeStatusText'); const statNumber = document.getElementById('statNumber');
    if (modeTitle) modeTitle.textContent = `${mode.icon} وضع ${mode.name}`; if (modeSlogan) modeSlogan.textContent = mode.slogan; if (statUnit) statUnit.textContent = 'سعرة'; if (modeStatusText) modeStatusText.textContent = mode.statusText; if (statNumber) statNumber.textContent = mode.dailyTarget || '0';
    updateCircleProgress(mode.dailyTarget === 500 ? 65 : mode.dailyTarget === 0 ? 50 : mode.dailyTarget === 400 ? 75 : 75); updateHealthPage(); updateEmergencyButtons(); renderSupplements();
}
function updateCircleProgress(percentage) { const circleFill = document.getElementById('circleFill'); const modeProgressFill = document.getElementById('modeProgressFill'); const mode = APP_DATABASE.healthModes[AppState.currentHealthMode]; if (circleFill) { circleFill.setAttribute('stroke-dasharray', `${percentage}, 100`); circleFill.style.stroke = mode.primaryColor; } if (modeProgressFill) { modeProgressFill.style.width = `${percentage}%`; } }
function updateEmergencyButtons() { const mode = APP_DATABASE.healthModes[AppState.currentHealthMode]; const emergencyBtn = document.getElementById('emergencyBtn'); const boostBtn = document.getElementById('boostBtn'); const emergencyBtnInline = document.getElementById('emergencyBtnInline'); const boostBtnInline = document.getElementById('boostBtnInline'); if (emergencyBtn) emergencyBtn.classList.toggle('hidden', !mode.emergencyBtn); if (boostBtn) boostBtn.classList.toggle('hidden', !mode.boostBtn); if (emergencyBtnInline) emergencyBtnInline.style.display = mode.emergencyBtn ? 'block' : 'none'; if (boostBtnInline) boostBtnInline.style.display = mode.boostBtn ? 'block' : 'none'; }

// ==================== حاسبة البروتين ====================
function calcDailyProtein() {
    const weightInput = document.getElementById('userWeight'); const activitySelect = document.getElementById('activityLevel');
    const userWeight = weightInput ? parseInt(weightInput.value) || 70 : AppState.userWeight;
    const activityLevel = activitySelect ? parseFloat(activitySelect.value) || 1.4 : AppState.activityLevel;
    const mode = APP_DATABASE.healthModes[AppState.currentHealthMode];
    const proteinPerKg = mode.proteinPerKg || 1.8;
    const dailyProtein = Math.round(userWeight * proteinPerKg * activityLevel / 1.4);
    AppState.userWeight = userWeight; AppState.activityLevel = activityLevel; AppState.dailyProteinTarget = dailyProtein;
    localStorage.setItem('taghdhiati_weight', userWeight); localStorage.setItem('taghdhiati_activity', activityLevel); localStorage.setItem('taghdhiati_proteinTarget', dailyProtein);
    const proteinResult = document.getElementById('proteinResult'); if (proteinResult) proteinResult.textContent = dailyProtein;
    updateProteinTip(userWeight, activityLevel);
}
function calcDailyProtein2() {
    const weightInput = document.getElementById('userWeight2'); const activitySelect = document.getElementById('activityLevel2');
    const userWeight = weightInput ? parseInt(weightInput.value) || 70 : AppState.userWeight;
    const activityLevel = activitySelect ? parseFloat(activitySelect.value) || 1.4 : AppState.activityLevel;
    const mode = APP_DATABASE.healthModes[AppState.currentHealthMode];
    const proteinPerKg = mode.proteinPerKg || 1.8;
    const dailyProtein = Math.round(userWeight * proteinPerKg * activityLevel / 1.4);
    AppState.userWeight = userWeight; AppState.activityLevel = activityLevel; AppState.dailyProteinTarget = dailyProtein;
    localStorage.setItem('taghdhiati_weight', userWeight); localStorage.setItem('taghdhiati_activity', activityLevel); localStorage.setItem('taghdhiati_proteinTarget', dailyProtein);
    const proteinResult = document.getElementById('proteinResult2'); if (proteinResult) proteinResult.textContent = dailyProtein;
    updateProteinTip2(userWeight, activityLevel);
}
function updateProteinTip(weight, activity) {
    const tipEl = document.getElementById('proteinTip'); if (!tipEl) return;
    const meals = AppState.currentHealthMode === 'muscle' ? 5 : 4;
    const perMeal = Math.round(AppState.dailyProteinTarget / meals);
    tipEl.textContent = `💡 وزع البروتين على ${meals} وجبات يومياً (${perMeal}غ لكل وجبة تقريباً)`;
}
function updateProteinTip2(weight, activity) {
    const tipEl = document.getElementById('proteinTip'); if (!tipEl) return;
    const meals = AppState.currentHealthMode === 'muscle' ? 5 : 4;
    const perMeal = Math.round(AppState.dailyProteinTarget / meals);
    if (tipEl) tipEl.textContent = `💡 وزع البروتين على ${meals} وجبات يومياً (${perMeal}غ لكل وجبة تقريباً)`;
}

// ==================== المكملات الغذائية ====================
function renderSupplements() {
    const container = document.getElementById('supplementList'); if (!container) return;
    const currentMode = AppState.currentHealthMode;
    const relevantSupplements = APP_DATABASE.supplements.filter(s => s.for.includes(currentMode));
    container.innerHTML = relevantSupplements.map(s => `
        <div class="supplement-card">
            <span class="supplement-icon">${s.emoji}</span>
            <div class="supplement-info">
                <h5>${s.name}</h5>
                <p><strong>الجرعة:</strong> ${s.dose}</p>
                <p><strong>التوقيت:</strong> ${s.timing}</p>
                <span class="supplement-dose">${s.reminder ? '🔔 مع تذكير' : '⏰ بدون تذكير'}</span>
            </div>
        </div>
    `).join('');
    const remindCheckbox = document.getElementById('remindSupplements'); if (remindCheckbox) remindCheckbox.checked = AppState.supplementReminder;
}
function toggleSupplementReminder() {
    AppState.supplementReminder = !AppState.supplementReminder;
    localStorage.setItem('taghdhiati_supplementReminder', AppState.supplementReminder);
    showToast(AppState.supplementReminder ? '🔔 تم تفعيل تذكير المكملات' : '🔕 تم تعطيل تذكير المكملات');
}

// ==================== عرض الماكروز في تفاصيل الوصفة ====================
function getMacrosHTML(recipe) {
    if (!recipe.protein && !recipe.carbs && !recipe.fat) return '';
    const totalMacros = (recipe.protein || 0) + (recipe.carbs || 0) + (recipe.fat || 0);
    if (totalMacros === 0) return '';
    const proteinPct = Math.round((recipe.protein || 0) / totalMacros * 100);
    const carbsPct = Math.round((recipe.carbs || 0) / totalMacros * 100);
    const fatPct = 100 - proteinPct - carbsPct;
    return `
        <div style="margin:12px 0;">
            <h5 style="margin-bottom:8px;">📊 نسبة الماكروز:</h5>
            <div class="macros-bar">
                <div class="macros-protein" style="width:${proteinPct}%;"></div>
                <div class="macros-carbs" style="width:${carbsPct}%;"></div>
                <div class="macros-fat" style="width:${fatPct}%;"></div>
            </div>
            <div class="macros-legend" style="margin-top:8px;">
                <span><span class="macros-dot protein"></span> بروتين: ${recipe.protein || 0}غ (${proteinPct}%)</span>
                <span><span class="macros-dot carbs"></span> كارب: ${recipe.carbs || 0}غ (${carbsPct}%)</span>
                <span><span class="macros-dot fat"></span> دهون: ${recipe.fat || 0}غ (${fatPct}%)</span>
            </div>
        </div>
    `;
}

// ==================== تحديث عرض تفاصيل الوصفة ====================
function viewRecipeDetails(recipeId) {
    const recipe = APP_DATABASE.recipes.find(r => r.id === recipeId); if (!recipe) return;
    const stepsHtml = recipe.steps.map((s, i) => `<div class="snack-item">📝 الخطوة ${i + 1}: ${s}</div>`).join('');
    const tipsHtml = recipe.tips ? recipe.tips.map(t => `<div class="snack-item">💡 ${t}</div>`).join('') : '';
    const ingredientsHtml = recipe.ingredients.map(i => `<span class="ingredient-tag" style="margin:3px;">${i}</span>`).join('');
    const macrosHtml = getMacrosHTML(recipe);
    const modal = document.getElementById('noteModal'); const modalBody = document.getElementById('noteModalBody'); const modalTitle = document.getElementById('noteModalTitle');
    if (modalTitle) modalTitle.textContent = `${recipe.emoji} ${recipe.name}`;
    if (modalBody) {
        modalBody.innerHTML = `
            <div style="margin-bottom:15px;">
                <div class="result-meta" style="margin-bottom:10px;"><span>⏱️ ${recipe.time} دقيقة</span><span>🔥 ${recipe.calories} سعرة</span><span>👥 ${recipe.servings} أشخاص</span><span>⭐ ${recipe.rating}</span></div>
                ${macrosHtml}
                <h5 style="margin-bottom:8px;">🧂 المقادير:</h5><div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:15px;">${ingredientsHtml}</div>
                <h5 style="margin-bottom:8px;">📋 الخطوات:</h5>${stepsHtml}
                ${tipsHtml ? '<h5 style="margin-bottom:8px;margin-top:10px;">💡 نصائح:</h5>' + tipsHtml : ''}
            </div>
            <button class="btn-primary" onclick="addToShoppingList('${recipeId}')">🛒 أضف للتسوق</button>
            <button class="btn-primary" style="margin-top:8px;background:#FF9800;" onclick="addToHistory('${recipeId}');closeModal('noteModal');">✅ طبختها!</button>
        `;
    }
    openModal('noteModal');
}

// ==================== باقي الدوال الأساسية (مختصرة) ====================
function renderIngredientGroups() { const container = document.getElementById('ingredientGroupsContainer'); if (!container) return; const categories = [ { key: 'proteins', title: '🥩 البروتين', id: 'proteinList' }, { key: 'carbs', title: '🍚 النشويات', id: 'carbsList' }, { key: 'vegetables', title: '🥬 الخضار', id: 'veggiesList' }, { key: 'fats', title: '🧈 الدهون', id: 'fatsList' }, { key: 'spices', title: '🧂 البهارات', id: 'spicesList' }, { key: 'extras', title: '🥛 الإضافات', id: 'extrasList' } ]; container.innerHTML = categories.map(cat => { const ingredients = APP_DATABASE.ingredients[cat.key] || []; return `<div class="group-card"><div class="group-header" onclick="toggleGroup('${cat.id}')"><span>${cat.title}</span><span class="group-arrow">▼</span></div><div class="group-items" id="${cat.id}">${ingredients.map(ing => `<span class="ingredient-tag ${AppState.selectedIngredients.includes(ing.name) ? 'selected' : ''}" data-ing="${ing.name}" onclick="selectIngredient(this)">${ing.emoji} ${ing.name}</span>`).join('')}</div></div>`; }).join(''); }
function toggleGroup(groupId) { const groupItems = document.getElementById(groupId); if (!groupItems) return; const groupCard = groupItems.closest('.group-card'); if (groupCard) groupCard.classList.toggle('open'); }
function selectIngredient(tagElement) { tagElement.classList.toggle('selected'); const ingName = tagElement.dataset.ing; if (tagElement.classList.contains('selected')) { if (!AppState.selectedIngredients.includes(ingName)) AppState.selectedIngredients.push(ingName); } else { AppState.selectedIngredients = AppState.selectedIngredients.filter(i => i !== ingName); } updateSelectedIngredientsDisplay(); }
function updateSelectedIngredientsDisplay() { const selectedTags = document.getElementById('selectedTags'); if (!selectedTags) return; if (AppState.selectedIngredients.length === 0) { selectedTags.innerHTML = '<p class="no-selection">لم تختر أي مكون بعد</p>'; } else { selectedTags.innerHTML = AppState.selectedIngredients.map(ing => `<span class="ingredient-tag selected" onclick="removeIngredient('${ing}')">${ing} ✕</span>`).join(''); } }
function removeIngredient(ingName) { AppState.selectedIngredients = AppState.selectedIngredients.filter(i => i !== ingName); document.querySelectorAll('.ingredient-tag').forEach(tag => { if (tag.dataset.ing === ingName) tag.classList.remove('selected'); }); updateSelectedIngredientsDisplay(); }
function searchRecipes() { if (AppState.selectedIngredients.length === 0) { showToast('⚠️ الرجاء اختيار مكون واحد على الأقل'); return; } const results = []; const userIngredients = AppState.selectedIngredients.map(i => i.trim().toLowerCase()); APP_DATABASE.recipes.forEach(recipe => { const recipeIngredients = recipe.ingredients.map(i => i.trim().toLowerCase()); const matchedIngredients = recipeIngredients.filter(ri => userIngredients.some(ui => ri.includes(ui) || ui.includes(ri))); const matchPercentage = Math.round((matchedIngredients.length / recipeIngredients.length) * 100); const missingIngredients = recipeIngredients.filter(ri => !userIngredients.some(ui => ri.includes(ui) || ui.includes(ri))); if (matchPercentage >= 40) { results.push({ ...recipe, matchPercentage, missingIngredients, matchLevel: matchPercentage >= 90 ? 'green' : matchPercentage >= 70 ? 'yellow' : 'orange' }); } }); results.sort((a, b) => b.matchPercentage - a.matchPercentage); AppState.searchResults = results; displaySearchResults(results); navigateTo('buildMeal'); showToast(`🔍 تم العثور على ${results.length} وصفة`); }
function filterRecipes(filterType) { let filtered = [...AppState.searchResults]; if (filtered.length === 0) filtered = [...APP_DATABASE.recipes]; switch (filterType) { case 'quick': filtered = filtered.filter(r => r.time <= 25); break; case 'easy': filtered = filtered.filter(r => r.difficulty === 'easy'); break; case 'cheap': filtered = filtered.filter(r => r.cost === 'low'); break; case 'fav': filtered = filtered.filter(r => AppState.savedRecipes.includes(r.id)); break; case 'highProtein': filtered = filtered.filter(r => r.protein >= 30); break; } displaySearchResults(filtered); }
function displaySearchResults(results) { const resultsList = document.getElementById('resultsList'); if (!resultsList) return; if (results.length === 0) { resultsList.innerHTML = '<p style="text-align:center;padding:20px;">😔 لا توجد نتائج</p>'; return; } resultsList.innerHTML = results.map(r => { const matchEmoji = r.matchLevel === 'green' ? '🟢 متطابقة' : r.matchLevel === 'yellow' ? '🟡 شبه متطابقة' : '🟠 قريبة'; const matchClass = r.matchLevel === 'green' ? 'match-green' : r.matchLevel === 'yellow' ? 'match-yellow' : 'match-orange'; const missingText = r.missingIngredients && r.missingIngredients.length > 0 ? `<p class="missing">❌ ينقصك: ${r.missingIngredients.join('، ')}</p>` : ''; const macrosBar = getMacrosHTML(r); return `<div class="result-card ${matchClass}"><div class="result-badge">${matchEmoji} ${r.matchPercentage || 0}%</div><h5>${r.emoji} ${r.name}</h5><div class="result-meta"><span>⏱️ ${r.time} دقيقة</span><span>🔥 ${r.calories} سعرة</span><span>💸 ${r.cost === 'low' ? 'اقتصادية' : r.cost === 'medium' ? 'متوسطة' : 'مرتفعة'}</span></div>${macrosBar}${missingText}<div class="result-actions"><button class="btn-sm btn-fav" onclick="toggleFavorite('${r.id}')">⭐ حفظ</button><button class="btn-sm btn-view" onclick="viewRecipeDetails('${r.id}')">👀 عرض الوصفة</button></div></div>`; }).join(''); }
function toggleFavorite(recipeId) { const index = AppState.savedRecipes.indexOf(recipeId); if (index > -1) { AppState.savedRecipes.splice(index, 1); showToast('💔 تمت إزالة من المفضلة'); } else { AppState.savedRecipes.push(recipeId); showToast('⭐ تمت الإضافة للمفضلة'); } localStorage.setItem('taghdhiati_favorites', JSON.stringify(AppState.savedRecipes)); updateKitchenStats(); }
function addToHistory(recipeId) { const recipe = APP_DATABASE.recipes.find(r => r.id === recipeId); if (!recipe) return; AppState.recipeHistory.unshift({ recipeId, name: recipe.name, emoji: recipe.emoji, date: new Date().toLocaleDateString('ar-SA'), calories: recipe.calories, protein: recipe.protein }); if (AppState.recipeHistory.length > 50) AppState.recipeHistory.pop(); localStorage.setItem('taghdhiati_history', JSON.stringify(AppState.recipeHistory)); AppState.dailyCaloriesConsumed += recipe.calories; AppState.totalProteinConsumed += recipe.protein || 0; updateCalorieBudget(); updateKitchenStats(); showToast(`✅ تمت إضافة ${recipe.name} إلى سجل اليوم`); }
function addToShoppingList(recipeId) { const recipe = APP_DATABASE.recipes.find(r => r.id === recipeId); if (!recipe) return; recipe.ingredients.forEach(ing => { if (!AppState.shoppingList.includes(ing)) AppState.shoppingList.push(ing); }); localStorage.setItem('taghdhiati_shopping', JSON.stringify(AppState.shoppingList)); renderShoppingList(); showToast('🛒 تمت إضافة المقادير'); }
function renderShoppingList() { const container = document.getElementById('shoppingCategoriesContainer'); if (!container) return; if (AppState.shoppingList.length === 0) { container.innerHTML = '<p style="text-align:center;padding:20px;">📋 قائمة التسوق فارغة</p>'; return; } const allIngredients = [...APP_DATABASE.ingredients.proteins, ...APP_DATABASE.ingredients.carbs, ...APP_DATABASE.ingredients.vegetables, ...APP_DATABASE.ingredients.spices, ...APP_DATABASE.ingredients.extras, ...APP_DATABASE.ingredients.fats]; const categories = { '🥩 لحوم': [], '🍚 نشويات': [], '🥬 خضار': [], '🧂 بهارات': [], '🥛 إضافات': [] }; AppState.shoppingList.forEach(item => { const found = allIngredients.find(i => i.name === item); if (found) { if (found.category === 'protein') categories['🥩 لحوم'].push(item); else if (found.category === 'carbs') categories['🍚 نشويات'].push(item); else if (found.category === 'vegetable') categories['🥬 خضار'].push(item); else if (found.category === 'spice') categories['🧂 بهارات'].push(item); else categories['🥛 إضافات'].push(item); } else { categories['🥬 خضار'].push(item); } }); container.innerHTML = Object.entries(categories).filter(([_, items]) => items.length > 0).map(([catName, items]) => `<div class="shop-cat"><h5>${catName}</h5><ul>${items.map(item => `<li><input type="checkbox" onchange="updateShoppingTotal()"> ${item}</li>`).join('')}</ul></div>`).join(''); updateShoppingTotal(); }
function updateShoppingTotal() { const uncheckedItems = document.querySelectorAll('.shop-cat input[type="checkbox"]:not(:checked)').length; const totalCostValue = document.getElementById('totalCostValue'); if (totalCostValue) totalCostValue.textContent = `${uncheckedItems * 15} ريال`; }
function updateCalorieValue() { const slider = document.getElementById('calorieSlider'); const number = document.getElementById('calorieNumber'); if (slider && number) number.textContent = slider.value; }
function updateBestCaloriesPage() { const resultsList = document.getElementById('calorieResults'); if (!resultsList) return; const targetCalories = parseInt(document.getElementById('calorieSlider')?.value || 500); const filteredRecipes = APP_DATABASE.recipes.filter(r => r.calories >= targetCalories - 150 && r.calories <= targetCalories + 200).slice(0, 8); resultsList.innerHTML = filteredRecipes.map(r => `<div class="result-card"><h5>${r.emoji} ${r.name}</h5><div class="result-meta"><span>🔥 ${r.calories} سعرة</span><span>⭐ ${r.rating}</span><span>💸 ${r.cost === 'low' ? 'اقتصادية' : r.cost === 'medium' ? 'متوسطة' : 'مرتفعة'}</span></div>${getMacrosHTML(r)}<div class="result-actions"><button class="btn-sm btn-view" onclick="viewRecipeDetails('${r.id}')">👀 عرض</button></div></div>`).join(''); updateCalorieBudget(); }
function sortCalorieResults(sortType) { document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active')); const activeBtn = document.querySelector(`.sort-btn[onclick*="${sortType}"]`); if (activeBtn) activeBtn.classList.add('active'); showToast('✅ تم الترتيب'); updateBestCaloriesPage(); }
function updateCalorieBudget() { const budgetFill = document.getElementById('budgetFill'); const budgetRemaining = document.getElementById('budgetRemaining'); const budgetConsumed = document.getElementById('budgetConsumed'); if (budgetFill) { const percentage = (AppState.dailyCaloriesConsumed / AppState.dailyCalorieTarget) * 100; budgetFill.style.width = Math.min(percentage, 100) + '%'; } const remaining = AppState.dailyCalorieTarget - AppState.dailyCaloriesConsumed; if (budgetRemaining) budgetRemaining.textContent = `🟢 متبقي: ${remaining.toLocaleString()} سعرة`; if (budgetConsumed) budgetConsumed.textContent = `المستهلك: ${AppState.dailyCaloriesConsumed.toLocaleString()} / ${AppState.dailyCalorieTarget.toLocaleString()}`; }
function renderAltRecipeSelect() { const select = document.getElementById('altRecipeSelect'); if (!select) return; select.innerHTML = APP_DATABASE.recipes.map(r => `<option value="${r.id}">${r.emoji} ${r.name} (${r.calories} سعرة)</option>`).join(''); }
function updateAlternativesPage() { const container = document.getElementById('altPlansContainer'); if (!container) return; const selectedRecipeId = document.getElementById('altRecipeSelect')?.value || APP_DATABASE.recipes[0].id; const relevantPlans = APP_DATABASE.alternativePlans.filter(p => p.recipeId === selectedRecipeId); if (relevantPlans.length === 0) { container.innerHTML = '<p style="text-align:center;padding:20px;">لا توجد بدائل لهذه الوصفة حالياً</p>'; return; } container.innerHTML = relevantPlans.map(plan => `<div class="alt-card"><div class="alt-header"><span>👨‍🍳 خطة "${plan.planName}" من ${plan.chef}</span><span class="save-badge">وفر ${plan.savedCalories} سعرة!</span></div><p>${plan.description}</p><p style="font-size:0.8rem;">🔥 السعرات الجديدة: ${plan.newCalories} سعرة | 🥩 بروتين: ${plan.newProtein || '?'}غ</p><div class="alt-equivalent">${plan.equivalent}</div></div>`).join(''); }
function updateAltPlan() { updateAlternativesPage(); }
function switchKitchenTab(tab) { AppState.currentKitchenTab = tab; document.querySelectorAll('.kitchen-tab').forEach(t => t.classList.remove('active')); const tabButtons = document.querySelectorAll('.kitchen-tab'); const tabMap = { 'my': 0, 'modified': 1, 'fav': 2, 'notes': 3 }; const index = tabMap[tab]; if (index !== undefined && tabButtons[index]) tabButtons[index].classList.add('active'); renderKitchenRecipes(); }
function updateKitchenStats() { const statMyRecipes = document.getElementById('statMyRecipes'); const statFavRecipes = document.getElementById('statFavRecipes'); const statModRecipes = document.getElementById('statModRecipes'); if (statMyRecipes) statMyRecipes.textContent = AppState.userRecipes.length + AppState.recipeHistory.length; if (statFavRecipes) statFavRecipes.textContent = AppState.savedRecipes.length; if (statModRecipes) statModRecipes.textContent = AppState.recipeHistory.length; }
function renderKitchenRecipes() { const container = document.getElementById('kitchenRecipesList'); if (!container) return; let items = []; switch (AppState.currentKitchenTab) { case 'my': items = AppState.recipeHistory.slice(0, 10); break; case 'modified': items = AppState.recipeHistory.slice(0, 5); break; case 'fav': items = AppState.savedRecipes.map(id => APP_DATABASE.recipes.find(r => r.id === id)).filter(Boolean); break; case 'notes': items = AppState.notes; break; } if (items.length === 0) { container.innerHTML = '<p style="text-align:center;padding:20px;">لا توجد عناصر بعد</p>'; return; } container.innerHTML = items.map(item => { if (item.recipeId) { return `<div class="kitchen-recipe-card"><span class="recipe-emoji">${item.emoji || '🍽️'}</span><div><h5>${item.name}</h5><p>${item.date} | 🔥 ${item.calories} سعرة</p></div></div>`; } else if (item.id) { return `<div class="kitchen-recipe-card"><span class="recipe-emoji">${item.emoji}</span><div><h5>${item.name}</h5><p>🔥 ${item.calories} سعرة</p></div><span class="fav-star">⭐</span></div>`; } else { return `<div class="snack-item">📝 ${item}</div>`; } }).join(''); }
function openModal(modalId) { const modal = document.getElementById(modalId); if (modal) modal.classList.add('show'); }
function closeModal(modalId) { const modal = document.getElementById(modalId); if (modal) modal.classList.remove('show'); }
function showEmergencySnacks() { const modal = document.getElementById('emergencyModal'); const modalBody = document.getElementById('emergencyModalBody'); if (modalBody) { modalBody.innerHTML = APP_DATABASE.emergencySnacks.map(s => `<div class="snack-item">${s.emoji} ${s.name} - <strong>${s.calories} سعرة</strong></div>`).join(''); } openModal('emergencyModal'); }
function showBoostSnacks() { const modal = document.getElementById('boostModal'); const modalBody = document.getElementById('boostModalBody'); if (modalBody) { modalBody.innerHTML = APP_DATABASE.boostSnacks.map(s => `<div class="snack-item">${s.emoji} ${s.name} - <strong>${s.calories} سعرة</strong></div>`).join(''); } openModal('boostModal'); }
function updateHealthPage() { const mode = APP_DATABASE.healthModes[AppState.currentHealthMode]; const healthDetailTitle = document.getElementById('healthDetailTitle'); const healthDetailDesc = document.getElementById('healthDetailDesc'); const specGoal = document.getElementById('specGoal'); const specMeal = document.getElementById('specMeal'); const specReminder = document.getElementById('specReminder'); if (healthDetailTitle) healthDetailTitle.textContent = `${mode.icon} وضع ${mode.name}`; if (healthDetailDesc) healthDetailDesc.textContent = mode.slogan; if (specGoal) specGoal.textContent = mode.goal; if (specMeal) specMeal.textContent = mode.mealRange; if (specReminder) specReminder.textContent = mode.reminders; document.querySelectorAll('.health-mode-option').forEach(opt => { opt.classList.remove('active'); if (opt.dataset.mode === AppState.currentHealthMode) opt.classList.add('active'); }); }
function updateChallengeDots() { const container = document.getElementById('challengeDots'); const text = document.getElementById('challengeDayText'); if (!container) return; let dotsHtml = ''; for (let i = 1; i <= AppState.challengeProgress.total; i++) { dotsHtml += `<span class="dot ${i <= AppState.challengeProgress.day ? 'done' : ''}">●</span>`; } container.innerHTML = dotsHtml; if (text) text.textContent = `اليوم ${AppState.challengeProgress.day} من ${AppState.challengeProgress.total}`; }
function renderChallengeCards() { const container = document.getElementById('challengeCardsContainer'); if (!container) return; container.innerHTML = APP_DATABASE.challenges.map(ch => `<div class="challenge-card" onclick="joinChallenge('${ch.id}')"><span class="challenge-icon">${ch.icon}</span><div><h5>${ch.name}</h5><p>${ch.goal}</p><div class="challenge-reward">${ch.medal}</div></div></div>`).join(''); }
function joinChallenge(challengeId) { const challenge = APP_DATABASE.challenges.find(c => c.id === challengeId); if (challenge) showToast(`🏆 تم الانضمام إلى ${challenge.name}!`); }
function updateBadgesDisplay() { const badgesGrid = document.getElementById('badgesGrid'); if (!badgesGrid) return; badgesGrid.innerHTML = APP_DATABASE.badges.map(badge => { const earned = AppState.earnedBadges.includes(badge.id); return `<span class="badge ${earned ? 'earned' : 'locked'}" title="${badge.name}: ${badge.condition}">${badge.icon}</span>`; }).join(''); }
function renderQuickRecipes() { const container = document.getElementById('quickRecipes'); if (!container) return; const quickRecipes = APP_DATABASE.recipes.filter(r => r.time <= 25).sort((a, b) => a.time - b.time).slice(0, 8); container.innerHTML = quickRecipes.map(r => `<div class="recipe-mini-card" onclick="viewRecipeDetails('${r.id}')"><div class="recipe-mini-img">${r.emoji}</div><div class="recipe-mini-info"><h5>${r.name}</h5><span>⏱️ ${r.time} دقيقة</span><span>🔥 ${r.calories} سعرة</span><span>🥩 ${r.protein}غ</span></div></div>`).join(''); }
function updateCupSetting(value) { AppState.cupSize = parseInt(value); localStorage.setItem('taghdhiati_cupSize', value); showToast('🥛 تم تحديث إعداد المكيال'); }
function toggleReminder(type) { if (type === 'meal') { AppState.mealReminder = !AppState.mealReminder; localStorage.setItem('taghdhiati_mealReminder', AppState.mealReminder); } else { AppState.challengeReminder = !AppState.challengeReminder; localStorage.setItem('taghdhiati_challengeReminder', AppState.challengeReminder); } }
function resetAllData() { if (confirm('⚠️ هل أنت متأكد من حذف جميع البيانات؟ لا يمكن التراجع عن هذا الإجراء.')) { localStorage.clear(); AppState.savedRecipes = []; AppState.recipeHistory = []; AppState.earnedBadges = ['b1']; AppState.shoppingList = []; AppState.notes = []; AppState.selectedIngredients = []; AppState.dailyCaloriesConsumed = 0; AppState.totalProteinConsumed = 0; updateAllUI(); renderShoppingList(); updateKitchenStats(); renderKitchenRecipes(); updateBadgesDisplay(); showToast('🔄 تم إعادة الضبط بنجاح'); } }
function showToast(message) { const toast = document.getElementById('toast'); const toastMessage = document.getElementById('toastMessage'); if (toast && toastMessage) { toastMessage.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); } }

// ==================== مستمعي الأحداث ====================
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    document.getElementById('emergencyBtn')?.addEventListener('click', showEmergencySnacks);
    document.getElementById('boostBtn')?.addEventListener('click', showBoostSnacks);
    document.getElementById('menuBtn')?.addEventListener('click', () => showToast('🍔 القائمة قيد التطوير'));
    document.getElementById('modeIndicator')?.addEventListener('click', () => navigateTo('myHealth'));
    document.getElementById('calorieSlider')?.addEventListener('input', function() { updateCalorieValue(); updateBestCaloriesPage(); });
    document.getElementById('soundToggle')?.addEventListener('change', function() { AppState.soundEnabled = this.checked; localStorage.setItem('taghdhiati_sound', this.checked); });
    document.addEventListener('click', function(e) { if (e.target.classList.contains('modal-overlay')) { e.target.classList.remove('show'); } });
});