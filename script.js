$.getJSON("onepiece.json", function (result) {
  let onepiece = result.onepiece;
  $.each(onepiece, function (i, op) {
    $("#op").append(showOP(op));
  });
});

function showOP(op) {
  return `<div class="row" id="brdr">
            <div class="col-md-3">
                <img
                src="${op.image_url}"
                alt=""
                />
            </div>
            <div class="col-md-9 content">
                <h2>${op.title}</h2>
                <div class="rts bg-light">
                <div class="score">
                    <p>Score</p>
                    <h4>#${op.score}</h4>
                </div>
                <div class="rated">
                    <p>Rated</p>
                    <h4>${op.rated}</h4>
                </div>
                <div class="type">
                    <p>Type</p>
                    <h4>${op.type}</h4>
                </div>
                <div class="members">
                    <p>Members</p>
                    <h4>${op.members}</h4>
                </div>
                </div>
                <div class="sinopsis">
                <h4>Synopsis :</h4>
                <p>${op.synopsis}</p>
                </div>
            </div>
            </div>`;
}
