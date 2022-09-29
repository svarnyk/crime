const crimeBlock = document.querySelector('.crimeTopography');
getCrime()

function getCrime() {
    const template = `
      <div class="crimeTopography__wrapper">
        <div class="crimeTopography__header">Crime Topography</div>
        <div class="crimeTopography__content">
            <div class="crimeTopography__statistic">
                <div class="topic">
                    <div class="topic__value">1234</div>
                    <div class="topic__heading">Killed Militarists</div>
                </div>
                <div class="topic">
                    <div class="topic__value">1234</div>
                    <div class="topic__heading">Killed Militarists</div>
                </div>
                <div class="topic">
                    <div class="topic__value">1234</div>
                    <div class="topic__heading">Killed Militarists</div>
                </div>
                <div class="topic">
                    <div class="topic__value">1234</div>
                    <div class="topic__heading">Killed Militarists</div>
                </div>
            </div>
            <div class="crimeTopography__map"></div>
        </div>
        <div class="crimeTopography__line"></div>
    </div>
`;
    crimeBlock.innerHTML = template
}