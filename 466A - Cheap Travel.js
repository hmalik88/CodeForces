var input = readline().split(' ').map(x => parseInt(x));
var targetRides = input[0], ridesOnMTicket = input[1];
var singleRideCost = input[2], mTicketCost = input[3];
if (targetRides % ridesOnMTicket === 0) {
  var cost1 = (targetRides / ridesOnMTicket) * mTicketCost;
  var cost2 = targetRides * singleRideCost;
  if (cost1 < cost2) print(cost1);
  else print(cost2);
} else {
  var cost3 = 0;
  var cost4 = 0;
  var targetCopy = targetRides;
  while (true) {
    targetCopy--;
    cost3 += singleRideCost;
    if (targetCopy && (targetCopy % ridesOnMTicket === 0)) {
      cost3 += (targetCopy / ridesOnMTicket) * mTicketCost;
      break;
    } else if (!targetCopy) break;
  }
  targetCopy = targetRides;
  cost4 = targetCopy % ridesOnMTicket !== 0 ? Math.ceil(targetCopy/ridesOnMTicket) * mTicketCost : (targetCopy / ridesOnMTicket) * mTicketCost;
  if (cost3 < cost4) print(cost3);
  else print(cost4);
}
