let data;

fetch("./data.json")
  .then((res) => res.json())
  .then((resData) => {
    console.log(resData);
    data = resData;
    tableHandler(data);
  });

document.querySelector("#inputVal").addEventListener("input", function () {
  tableHandler(data);
});

function tableHandler(data) {
  if (!data) {
    return;
  }

  let input = document.querySelector("#inputVal");
  query = input.value;
  let main = document.querySelector("tbody");
  let inp = document.createElement("input");
  inp.type = "checkbox";

  let tags = "";
  data.map((x) => {
    if (
      x.name.toLowerCase().includes(query) ||
      x.name.toUpperCase().includes(query)
    ) {
      let checkboxHTML = inp.outerHTML;
      tags += `<tr style="font-size:14px;"> 
                    <td style="font-weight:600;"> ${checkboxHTML} ${x.logo} ${
        x.name
      } </td>
                    <td style="font-weight:600;"> ${x.description.slice(
                      0,
                      15
                    )}... </td>
                    <td> ${x.members
                      .map((mem) => {
                        return `<span>${mem}</span>`;
                      })
                      .join(" ")} </td>

                    <td> ${x.categories
                      .map((cat) => {
                        return `<span style="border: 1px solid rgb(245, 238, 238); border-radius:5px; padding: 0px 3px; background-color: rgb(245, 238, 238);font-size:12px;">${cat}</span>`;
                      })
                      .join(" ")}
                    </td>

                    <td> ${x.tags
                      .map((tag) => {
                        return `<span style="border: 1px solid rgb(245, 238, 238); border-radius:5px; padding: 0px 3px; background-color: rgb(245, 238, 238);font-size:12px;">${tag.slice(
                          0,
                          10
                        )}...</span>`;
                      })
                      .join(" ")} </td>
                    <td> <span style="border: 1px solid rgb(245, 238, 238); border-radius:5px; padding: 0px 3px; background-color: rgb(245, 238, 238); font-size:12px;"> ${
                      x.nextmeating
                    } </span> </td>
                    </tr>`;
    }
  });
  main.innerHTML = tags;
}
