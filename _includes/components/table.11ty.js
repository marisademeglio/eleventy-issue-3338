let render = (data) => {
    let retval = 
    `<table>
        <caption>Ratings</caption>
        <tbody>
        ${data.stats.map(stat => `
            <tr>
                <td>${stat.name}</td>
                <td>${stat.rating}</td>
            </tr>
        `).join("")}
        </tbody>
    </table>`;
    return retval;
}

export default render;
