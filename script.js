
    let points = 0;
    let currentTask = 0;

    // قائمة المهام
    const tasks = [
      " ازرع أشجار كثيرة",
      " استخدم زجاجة مياه قابلة لإعادة التعبئة",
      " استخدم الدراجة بدلاً من السيارة",
      " افصل الأجهزة غير المستخدمة لتوفير الكهرباء",
      " أعد تدوير النفايات البلاستيكية"
    ];

    function showTask() {
      if (currentTask >= tasks.length) {
        currentTask = 0;
      }

      // عرض المهمة
      document.getElementById("taskText").innerText = " : أكمل المهمة الآتية \n" + tasks[currentTask];
      document.getElementById("taskBox").classList.remove("hidden");
    }

    function addPoint() {
      points++;
      document.getElementById("topPoints").innerText = points;
      document.getElementById("greenPoints").innerText = points;


      document.getElementById("taskBox").classList.add("hidden");


      currentTask++;
    }