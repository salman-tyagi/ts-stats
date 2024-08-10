import fs from 'node:fs';

import { OutputTarget } from '../Summary';

class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
            <h1>Team analysis</h1>
            <p>${report}<p>
        </div>
    `;

    fs.writeFileSync('data/report.html', html);
  }
}

export default HtmlReport;
